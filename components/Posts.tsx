import { useEffect, useState } from 'react';
import { collection, DocumentData, onSnapshot, orderBy, query, QueryDocumentSnapshot } from 'firebase/firestore';
import Post from './Post';
import { db, ig_posts_url } from '../firebase';

export default function Posts() {
  // without using React-Firebase-Hooks
  const [posts, setPosts] = useState<Array<QueryDocumentSnapshot<DocumentData>>>([]);

  // run 'loadPosts' code before Component is first
  // use FireStore's 'unSubscribe' function to turn off realtime listener
  // ... return the function from useEffect to be called when Component is destroyed
  useEffect(() => loadPosts(), []);

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
      {posts.map((post: QueryDocumentSnapshot<DocumentData>) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          profileImg={post.data().profileImg}
          postImg={post.data().postImg}
          caption={post.data().caption}
        />
      ))}
    </section>
  );
}
