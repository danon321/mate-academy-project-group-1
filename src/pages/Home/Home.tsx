import { useEffect, useState } from 'react';
import { initialPosts } from '../../app/redux/data/initialPosts';
import { HomePost } from '../../components/HomePost/HomePost';
import { SkeletonHomePost } from '../../components/States/Skeleton/SkeletonHomePost';
import './home.scss';
import ImageSlider from '../../components/Slideshow/Slideshow';
import { Error } from '../../components/States/Error/Error';

export const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      // setError(true);
    }, 1500);
  }, []);

  return (
    <>
      <ImageSlider />
      <div className="container">
        <div className="post-grid">
          {!error ? (
            initialPosts.map((post) => {
              return (
                (loading && <SkeletonHomePost key={post.id} />) || (
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
