import Moment from 'react-moment';
import { IComment } from '../types/ig-clone';

type IProps = {
  postComment: IComment;
};

export default function CommentRow({ postComment }: IProps) {
  const { comment, profileImg, username, timestamp } = postComment;
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
      <Moment interval={600} className='pr-5 text-xs' fromNow>{timestamp?.toDate()}</Moment>
    </div>
  );
}
