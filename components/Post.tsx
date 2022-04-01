import type { IComment, IPost } from '../types/ig-clone';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartFilledIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  serverTimestamp,
} from 'firebase/firestore';
import { db, ig_comments_url, ig_posts_url } from '../firebase';
import CommentRow from './CommentRow';

export default function Post({
  id,
  username,
  profileImg,
  postImg,
  caption,
}: IPost) {
  const { data: session } = useSession();
  const [comments, setComments] = useState<
    Array<QueryDocumentSnapshot<DocumentData>>
  >([]);
  const [comment, setComment] = useState('');
  const postId = id as string;
  const commentCollectionRef = collection(
    db,
    ig_posts_url,
    postId,
    ig_comments_url
  );
  const sendComment = async (e: any) => {
    e.preventDefault();

    // create copy of comment to UI input can be cleared instantly
    const commentToSend = comment;
    setComment('');

    try {
      const commentToAdd: IComment = {
        comment: commentToSend,
        username: session?.user.username,
        profileImg: session?.user.image,
        timestamp: serverTimestamp(),
      };

      await addDoc(commentCollectionRef, commentToAdd);
    } catch (error) {
      console.log('ModalComp: error adding post', error);
    }
  };
  const loadComments = () => {
    try {
      const q = query(commentCollectionRef, orderBy('timestamp', 'desc'));
      return onSnapshot(q, (snapshot) => setComments(snapshot.docs));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => loadComments(), []);

  return (
    <article className="my-7 rounded-sm border bg-white">
      {/* header */}
      <div className="flex items-center p-3">
        <img
          src={profileImg}
          alt=""
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
          referrerPolicy="no-referrer"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Image */}
      <img src={postImg} alt="post image" className="w-full object-cover" />
      {/* Buttons */}
      {session && session.user && (
        <div className="flex items-center justify-between px-5 pt-4">
          <div className="flex items-center space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}
      {/* Caption */}
      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>
      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment: QueryDocumentSnapshot<DocumentData>) => (
            <CommentRow key={comment.id} postComment={comment.data()} />
          ))}
        </div>
      )}

      {/* Input Box */}
      {session && session.user && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button
            onClick={sendComment}
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </article>
  );
}
