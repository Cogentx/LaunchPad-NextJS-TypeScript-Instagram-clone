import type { IPost } from '../custom-types';
import Image from 'next/image';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/solid';

export default function Post({ id, username, userImg, img, caption }: IPost) {
  return (
    <article className="my-7 rounded-sm border bg-white">
      {/* header */}
      <div className="flex items-center p-3">
        <img
          src={userImg}
          alt=""
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      <img src={img} alt="post image" className="w-full object-cover" />
      {/* Buttons */}
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="flex items-center space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      {/* Caption */}
      <p className="p-5 truncate">
        <span className='font-bold mr-1'>{username}</span>
        {caption}
      </p>
      {/* Comments */}

      {/* Input Box */}
    </article>
  );
}