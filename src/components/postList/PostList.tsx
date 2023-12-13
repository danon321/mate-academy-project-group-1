import { usePostSelector } from '../../hooks/hooks';
import { PostType } from '../../types/Post';
import { Post } from '../post';

export const PostList = () => {
  const posts = usePostSelector((state) => state.posts.posts);

  return (
    <>
      {posts.map((post: PostType) => (
        <Post key={post.id} />
      ))}
    </>
  );
};
