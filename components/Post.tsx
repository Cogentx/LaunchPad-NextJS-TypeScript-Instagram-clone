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

      {/* Caption */}

      {/* Comments */}

      {/* Input Box */}
    </article>
  );
}
