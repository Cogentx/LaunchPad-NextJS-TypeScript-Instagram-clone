import { useEffect, useState } from 'react';
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore';
import Post from './Post';
import { db, ig_posts_url } from '../firebase';
import type { IPost } from '../types/ig-clone';

export default function Posts() {
  // without using React-Firebase-Hooks
  const [posts, setPosts] = useState<Array<QueryDocumentSnapshot<DocumentData>>>([]);

  // run 'loadPosts' code before Component is first
  useEffect(() => {
    // store FireStore's 'unSubscribe' function to turn off realtime listener
    // ...and return the function to be called when Component is destroyed
    const unSubscribe = loadPosts();

    return unSubscribe;
  }, []);

  const loadPosts = () => {
    // setup realtime listener on 'post' data in FireStore
    try {
      const q = query(collection(db, ig_posts_url),orderBy('timestamp','desc'));

      return onSnapshot(q, (snapshot) => setPosts(snapshot.docs));
    } catch (error) {
      console.log('PostsComp: error loading posts', error);
    }
  };

  return (
    <section>
      {posts.map((post: IPost) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          profileImg={post.profileImg}
          postImg={post.postImg}
          caption={post.caption}
        />
      ))}
    </section>
  );
}
