import { Fragment, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { Dialog, Transition } from '@headlessui/react';
import { CameraIcon } from '@heroicons/react/outline';
import { modalState } from '../atoms/modalAtoms';
import { db, ig_posts_url, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { IPost } from '../types/ig-clone';

export default function Modal() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const [imageToPost, setImageToPost] = useState('');
  const [loading, setLoading] = useState(false);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const captionRef = useRef<HTMLInputElement>(null);
  const closeModal = () => setOpen(false);
  const addImageToPost = (e: any) => {
    const fileReader = new FileReader();
    const file = e.target.files[0];

    if (file) {
      fileReader.readAsDataURL(file);

      fileReader.onload = (readerEvent) => {
        if (readerEvent.target) {
          const fileLocal = readerEvent.target.result as string;

          setImageToPost(fileLocal);
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
  const resetImageToPost = () => setImageToPost('');
  const uploadPost = async () => {
    // if 'loading' do re-submit OR
    // if user not currently logged in do not continue
    if (loading || !session || !session.user) return;

    setLoading(true);

    const { name, username, image: profileImg } = session.user;
    const caption = captionRef?.current?.value || '';

    /* Firebase v9 Cloud Firestore document creation
      - If no collection exists, it is created
      - If no document exists, it is created
      - If document exists, it is replaced (unless merge option specified)
    */

    // 1) Create a post and add to firestore 'posts' collection
    // 2) Get the 'post id' for the newly created 'post'
    // 3) Upload the image to Firebase Storage with the 'post id'
    // 4) Get a DownloadURL from Firebase Storage and update the original 'post' with the image

    try {
      const postToAdd: IPost = {
        name,
        username,
        caption,
        profileImg,
        timestamp: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, ig_posts_url), postToAdd);
      const doc = await getDoc(docRef);

      // if post successfully added to Cloud Firestore and there is an image to upload
      if (doc.exists() && imageToPost) {
        const storageRef = ref(storage, `${ig_posts_url}/${doc.id}`);

        // imageToPost is a 'string' type of 'data_url' (base64 encoded image)
        // this type matches (data_url) how file is read in above 'fileReader.readAsDataURL(file)'
        const uploadResult = await uploadString(
          storageRef,
          imageToPost as string,
          'data_url'
        );

        const downloadURL = await getDownloadURL(uploadResult.ref);

        // CAUTION: if NOT using 'updateDoc', set {MERGE: TRUE} when updating otherwise it will simply replace current Document and all current data will be lost.
        // 'updateDoc' will MERGE by default!!!
        updateDoc(docRef, {
          postImg: downloadURL,
        });

        // Reset Loading and Modal States
        setLoading(false);
        setOpen(false);
        resetImageToPost();
      }
    } catch (error) {
      console.log('ModalComp: error adding post', error);
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
                {imageToPost ? (
                  <img
                    src={imageToPost}
                    alt="Selected File Preview"
                    className="w-full cursor-pointer object-contain"
                    onClick={resetImageToPost}
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
                      disabled={!imageToPost}
                      onClick={uploadPost}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 hover:disabled:bg-gray-300 sm:text-sm"
                    >
                      {loading ? 'Loading...' : 'Upload Post'}
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
