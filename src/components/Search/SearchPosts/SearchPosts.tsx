import { getSearchWith } from '../../../utils/Search/SearchHelper';
import './searchPosts.scss';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

export const SearchPosts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="container">
        <div className='input__container'>
          <input
            className="input__search"
            type="search"
            placeholder="Search title, author..."
            value={searchParams.get('query') || ''}
            onChange={(e) => {
              const nextParams = getSearchWith(searchParams, {
                query: e.target.value || null,
                
              });

              setSearchParams(new URLSearchParams(nextParams));
            }}
          />
          <SearchIcon fontSize='large'/>
        </div>
      </div>
    </>
  );
};
