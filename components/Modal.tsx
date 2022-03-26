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
        <div className="flex min-h-[800px] items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:min-h-screen sm:p-0">
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Title
              </Dialog.Title>

              <div className="mt-2">
                <p className="text-sm text-gray-500">Message...</p>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex  justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Got itasdfdsfasdfasdfd!!!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
