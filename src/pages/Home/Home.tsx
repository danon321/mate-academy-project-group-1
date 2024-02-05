import { HomePost } from '../../components/HomePost/HomePost';
import './home.scss';
import ImageSlider from '../../components/Slideshow/Slideshow';
import { Error } from '../../components/States/Error/Error';
import { useAppDispatch, usePostSelector } from '../../app/redux/hooks/hooks';
import { SkeletonHomePost } from '../../components/HomePost/SkeletonHomePost';
import { useEffect } from 'react';
import { fetchPosts } from '../../api/services/fetchPost';
import { count } from '../../utils/Count/count';

export const Home: React.FC = () => {
  const data = usePostSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataLoading = async () => {
      const posts = await fetchPosts();
      dispatch(posts);
    };

    dataLoading();
  }, []);

  return (
    <>
      <ImageSlider />
      <div className="container">
        <div className="post-grid">
          {data.posts.length === 0 ? (
            count(8).map((count) => {
              return <SkeletonHomePost key={count} />;
            })
          ) : !data.error ? (
            data.posts.map((post) => {
              return <HomePost key={post.id} post={post} />;
            })
          ) : (
            <Error />
          )}
        </div>
      </div>
    </>
  );
};
