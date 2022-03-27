import { Fragment, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Dialog, Transition } from '@headlessui/react';
import { modalState } from '../atoms/modalAtoms';
import { CameraIcon } from '@heroicons/react/outline';

export default function Modal() {
  const [open, setOpen] = useRecoilState(modalState);
  const [selectedFile, setSelectedFile] = useState('');
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const closeModal = () => setOpen(false);
  const addImageToPost = (e: any) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      fileReader.readAsDataURL(file);

      fileReader.onload = (readerEvent) => {
        if (readerEvent.target) {
          const fileLocal = readerEvent.target.result as string;

          setSelectedFile(fileLocal);
        }
      };
    }
  };
  const handleCameraClick = () => {
    if (filePickerRef.current) {
      const filePicker = filePickerRef.current as HTMLInputElement;
      filePicker.click();
    }
  };

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
            <div className="inline-block w-full max-w-md transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:align-middle">
              <div>
                {selectedFile ? (
                  <img
                    src={selectedFile}
                    alt="Selected File Preview"
                    className="w-full object-contain cursor-pointer"
                    onClick={() => setSelectedFile('')}
                  />
                ) : (
                  <div
                    onClick={handleCameraClick}
                    className="mx-auto flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-red-100"
                  >
                    <CameraIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-red-600"
                    />
                  </div>
                )}

                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Upload a photo
                    </Dialog.Title>
                  </div>
                  <div className="mt-2">
                    <input
                      ref={filePickerRef}
                      type="file"
                      hidden
                      onChange={addImageToPost}
                    />
                  </div>
                  <div className="mt-2">
                    <input
                      ref={captionRef}
                      type="text"
                      placeholder="Please enter a caption..."
                      className="w-full border-none text-center focus:ring-0"
                    />
                  </div>
                  <div className="mt-5 sm:mt-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 hover:disabled:bg-gray-300 sm:text-sm"
                    >
                      Upload Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
