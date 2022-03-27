import type { IPost } from '../types/ig-clone';
import Post from './Post';

export default function Posts() {
  const posts: Array<IPost> = [
    {
      id: '123',
      username: 'Ted Cogent',
      profileImg: 'https://links.papareact.com/3ke',
      postImg: 'https://links.papareact.com/kxk',
      caption: 'This is Awesome!!!',
    },
    {
      id: '456',
      username: 'Ted Cogent',
      profileImg: 'https://links.papareact.com/3ke',
      postImg: 'https://links.papareact.com/kxk',
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
          profileImg={post.profileImg}
          postImg={post.postImg}
          caption={post.caption}
        />
      ))}
    </section>
  );
}
