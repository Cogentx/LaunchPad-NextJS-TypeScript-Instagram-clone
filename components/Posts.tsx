import type { IPost } from '../types/custom-types';
import Post from './Post';

export default function Posts() {
  const posts: Array<IPost> = [
    {
      id: '123',
      username: 'Ted Cogent',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/3ke',
      caption: 'This is Awesome!!!',
    },
    {
      id: '456',
      username: 'Ted Cogent',
      userImg: 'https://links.papareact.com/3ke',
      img: 'https://links.papareact.com/kxk',
      caption: 'This is Awesome!!!',
    },
  ];
  return (
    <section>
      {posts.map((post: IPost) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </section>
  );
}
