import React from 'react';
import { IComment } from '../types/ig-clone';

type IProps = {
  postComment: IComment;
};

export default function CommentRow({ postComment }: IProps) {
  const { comment, profileImg, username } = postComment;
  return (
    <div className="mb-3 flex items-center space-x-2">
      <img
        className="h-7 rounded-full"
        src={profileImg}
        alt="Profile Image"
        referrerPolicy="no-referrer"
      />
      <p className="flex-1 text-sm">
        <span className="font-bold">{username}</span> {comment}
      </p>
    </div>
  );
}
