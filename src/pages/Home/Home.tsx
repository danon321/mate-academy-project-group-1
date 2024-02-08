import { HomePost } from '../../components/HomePost/HomePost';
import './home.scss';
import ImageSlider from '../../components/Slideshow/Slideshow';
import { Error } from '../../components/Error/Error';
import { useAppDispatch, usePostSelector } from '../../app/redux/hooks/hooks';
import { SkeletonHomePost } from '../../components/HomePost/SkeletonHomePost';
import { useEffect } from 'react';
import { fetchPosts } from '../../api/services/fetchPost';
import { Categories } from '../../components/Categories/Categories';
import { useSearchParams } from 'react-router-dom';
import { getSearchPosts } from '../../utils/Search/getSearchPosts';
import { SearchPosts } from '../../components/Search/SearchPosts/SearchPosts';

export const Home: React.FC = () => {
  const data = usePostSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const getCount = () => {
    const count = [];
    for (let i = 0; i < 8; i++) {
      count.push(i);
    }
    return count;
  };

  useEffect(() => {
    const dataLoading = async () => {
      const posts = await fetchPosts();
      dispatch(posts);
    };

    dataLoading();
  }, [searchParams.get('query')]);

  const showPosts = getSearchPosts(data.posts, searchParams.get('query'));

  return (
    <>
      <ImageSlider />
      <SearchPosts />
      <Categories />
      <div className="container">
        <h1 className="title">All posts</h1>
        <div className="post-grid">
          {data.posts.length === 0 ? (
            getCount().map((count) => {
              return <SkeletonHomePost key={count} />;
            })
          ) : !data.error ? (
            showPosts.map((post) => {
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
