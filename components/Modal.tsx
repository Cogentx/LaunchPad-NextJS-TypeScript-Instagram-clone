import { Fragment } from 'react';
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';
import { modalState } from '../atoms/modalAtoms';

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const closeModal = () => setOpen(false);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        onClose={closeModal}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="my-8 inline-block w-full max-w-md transform rounded-3xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Title
              </Dialog.Title>

              <div className='mt-2'>
                <p className='text-sm text-gray-500'>Message...</p>
              </div>
              <div className='mt-4'>
                <button type='button' className='bg-blue-100  rounded-md px-4 py-2 inline-flex justify-center text-sm font-medium text-blue-900 border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'>Got itasdfdsfasdfasdfd!!!</button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
