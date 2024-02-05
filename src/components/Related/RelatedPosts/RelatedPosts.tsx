import { useEffect } from 'react';
import {
  useAppDispatch,
  usePostSelector,
} from '../../../app/redux/hooks/hooks';
import { RelatedPost } from '../RelatedPost/RelatedPost';
import './relatedPosts.scss';
import { fetchPosts } from '../../../api/services/fetchPost';
import { useParams } from 'react-router-dom';
import { SkeletonRelatedPost } from '../RelatedPost/SkeletonRelatedPost';
import { count } from '../../../utils/Count/count';
import { Error } from '../../States/Error/Error';

export const RelatedPosts = () => {
  const { id } = useParams();
  const userId = Number(id);
  const data = usePostSelector((state) => state.posts);
  const posts = usePostSelector((state) =>
    state.posts.posts.filter((post) => post.user.id === userId)
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadData = async () => {
      const posts = await fetchPosts();
      dispatch(posts);
    };

    loadData();
  }, []);

  return (
    <div className="relatedPosts">
      <div className="container">
        <h3 className="relatedPosts__title">Related Posts</h3>
        <div className="relatedPosts__content">
          {posts.length === 0 ? (
            count(3).map((count) => {
              return <SkeletonRelatedPost key={count} />;
            })
          ) : !data.error ? (
            posts.map((post) => {
              return <RelatedPost key={post.id} post={post} />;
            })
          ) : (
            <Error />
          )}
        </div>
      </div>
    </div>
  );
};
