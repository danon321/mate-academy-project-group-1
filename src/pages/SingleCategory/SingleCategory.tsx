import './categoryHeader.scss';
import './singleCategory.scss';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchPostsByCategory, fetchCategories } from '../../api/services/fetchPost';
import {
  useAppDispatch,
  useCategorySelector,
  usePostsByCategory,
} from '../../app/redux/hooks/hooks';
import { HomePost } from '../../components/HomePost/HomePost';
import { SearchPosts } from '../../components/Search/SearchPosts/SearchPosts';
import { getSearchPosts } from '../../utils/Search/getSearchPosts';

const SingleCategory: React.FC = () => {
  const { categoryTitle, title } = useParams();

  const [sortBy, setSortBy] = useState<
    'title-az' | 'title-za' | 'date-newest' | 'date-oldest'
  >('title-az');
  const [searchParams] = useSearchParams();
  const data = usePostsByCategory((state) => state.postByCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('sort', sortBy);
    navigate(currentURL.pathname + currentURL.search);
  }, [sortBy, navigate]);

  const handleSortChange = (option: 'title-az' | 'title-za' | 'date-newest' | 'date-oldest') => {
    setSortBy(option);
  };

  const category = useCategorySelector((state) =>
    state.categories.categories.find(
      (category) => category.title.toLowerCase() === categoryTitle?.toLowerCase()
    )
  );
 

  useEffect(() => {
    const dataLoading = async () => {
      const categories = await fetchCategories();
      dispatch(categories);
    };

    dataLoading();
  }, [title]);
  useEffect(() => {
    const dataLoading = async (title: string) => {
      const posts = await fetchPostsByCategory(title);
      dispatch(posts);
    };

    dataLoading(categoryTitle || '');
  }, [searchParams.get('query')]);

  const showPosts = getSearchPosts(data.posts, searchParams.get('query'));

  // const sortedPosts = [...showPosts].sort((a, b) => {
  //   if (sortBy.includes('title')) {
  //     return sortBy.includes('az') ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
  //   } else if (sortBy.includes('date')) {
  //     return sortBy.includes('newest') ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date(a.date).getTime() - new Date(b.date).getTime();
  //   }
  //   return 0;
  // });

  return (
    <>
      {console.log('category działa', category?.image)}
      <div className='slide' style={{ backgroundImage: 'url(' + category?.image + ')' }}>
        <div className="container">
          <div className="slide__overlay">
            <div className="slide__overlay__title">
              {categoryTitle &&
                categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
            </div>
            <p className="slide__overlay__text">{category?.about}</p>
          </div>
        </div>
      </div>
      ;
      <div className="container">
        <div className="title">
          <h1>
            {categoryTitle &&
              categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}
          </h1>
          <SearchPosts />
          <div className="sort-dropdown">
            <div className="dropdown-button">
              <span>
                Sort by {sortBy.includes('title') ? 'Title' : 'Date'}
                {sortBy.includes('title') && (
                  <> ({sortBy.includes('az') ? 'A to Z' : 'Z to A'}) </>
                )}
                {sortBy.includes('date') && (
                  <>
                    {' '}
                    (
                    {sortBy.includes('newest')
                      ? 'Newest to Oldest'
                      : 'Oldest to Newest'}
                    ){' '}
                  </>
                )}
              </span>
              <div className="dropdown-content">
                <button onClick={() => handleSortChange('title-az')}>
                  Sort by Title (A to Z)
                </button>
                <button onClick={() => handleSortChange('title-za')}>
                  Sort by Title (Z to A)
                </button>
                <button onClick={() => handleSortChange('date-newest')}>
                  Sort by Date (Newest to Oldest)
                </button>
                <button onClick={() => handleSortChange('date-oldest')}>
                  Sort by Date (Oldest to Newest)
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="post-grid"></div>
      </div>
      <div className="container post-grid">
        {showPosts.map((post) => (
          <HomePost key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default SingleCategory;
