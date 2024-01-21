import { HomePost } from '../../components/HomePost/HomePost';
import './home.scss';
import ImageSlider from '../../components/Slideshow/Slideshow';
import { Error } from '../../components/States/Error/Error';
import { useAppDispatch, usePostSelector } from '../../app/redux/hooks/hooks';
import { SkeletonHomePost } from '../../components/States/Skeleton/SkeletonHomePost';
import { useEffect } from 'react';
import { fetchPosts } from '../../api/services/fetchPost';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = usePostSelector((state) => state.posts);

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
          {!data.error ? (
            data.posts.map((post) => {
              return (
                (data.isLoading && <SkeletonHomePost key={post.id} />) || (
                  <HomePost key={post.id} post={post} />
                )
              );
            })
          ) : (
            <Error />
          )}
        </div>
      </div>
    </>
  );
};
