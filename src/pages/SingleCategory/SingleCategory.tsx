import './singleCategory.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { fetchPosts } from '../../api/services/fetchPost';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../app/store';

const testPosts = [
  { id: 1, title: 'ANNA', date: '2020-12-24' },
  { id: 2, title: 'VICTOR', date: '2024-02-11' },
  { id: 3, title: 'MARIA', date: '2022-05-30' },
  { id: 4, title: 'BERNARD', date: '2021-01-14' },
  { id: 5, title: 'ELINA', date: '2023-08-05' },
  { id: 6, title: 'JAMES', date: '2022-11-20' },
  { id: 7, title: 'LILY', date: '2023-04-02' },
  { id: 8, title: 'WILLIAM', date: '2020-09-15' },
  { id: 9, title: 'SOFIA', date: '2021-07-08' },
  { id: 10, title: 'LUCAS', date: '2022-03-12' },
  { id: 11, title: 'EMMA', date: '2023-01-28' },
  { id: 12, title: 'OLIVER', date: '2021-06-18' },
  { id: 13, title: 'AVERY', date: '2023-09-09' },
  { id: 14, title: 'ETHAN', date: '2022-08-14' },
  { id: 15, title: 'MIA', date: '2020-04-05' },
  { id: 16, title: 'MASON', date: '2021-02-22' },
  { id: 17, title: 'ZAVA', date: '2023-07-17' },
  { id: 18, title: 'LOGAN', date: '2020-10-30' },
  { id: 19, title: 'HARPER', date: '2022-06-25' },
  { id: 20, title: 'PATRICK', date: '2024-01-09' },
];

const SingleCategory: React.FC = () => {
  const navigate = useNavigate();
  const { categoryTitle } = useParams();
  const [sortBy, setSortBy] = useState<'title-az' | 'title-za' | 'date-newest' | 'date-oldest'>('title-az');

  useEffect(() => {
    const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('sort', sortBy);
    navigate(currentURL.pathname + currentURL.search);
  }, [sortBy, navigate]);
  
  const posts = testPosts;

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy.includes('title')) {
      return sortBy.includes('az') ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortBy.includes('date')) {
      return sortBy.includes('newest') ? new Date(b.date).getTime() - new Date(a.date).getTime() : new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    return 0;
  });

  const handleSortChange = (option: 'title-az' | 'title-za' | 'date-newest' | 'date-oldest') => {
    setSortBy(option);
  };

  return (
    <>
      <div className="container">
        <div className='title'>
          <h1>{categoryTitle && categoryTitle.charAt(0).toUpperCase() + categoryTitle.slice(1)}</h1>
          <div className="sort-dropdown">
            <div className="dropdown-button">
              <span>
                Sort by {sortBy.includes('title') ? 'Title' : 'Date'}
                {sortBy.includes('title') && (
                  <> ({sortBy.includes('az') ? 'A to Z' : 'Z to A'}) </>
                )}
                {sortBy.includes('date') && (
                  <> ({sortBy.includes('newest') ? 'Newest to Oldest' : 'Oldest to Newest'}) </>
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
        <div className="post-grid">
          {sortedPosts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleCategory;

