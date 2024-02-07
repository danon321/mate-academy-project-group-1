import { getSearchWith } from '../../../utils/Search/SearchHelper';
import './searchByTitle.scss';
import { FilledInput, FormControl, InputLabel } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

export const SearchByTitle = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="container">
        <FormControl className='search'>
          <InputLabel htmlFor="component-filled">Search title</InputLabel>
          <FilledInput
            id="component-filled"
            margin='none'
            type="search"
            value={searchParams.get('title') || ''}
            onChange={(e) => {
              const nextParams = getSearchWith(searchParams, {
                title: e.target.value || null,
              });

              setSearchParams(new URLSearchParams(nextParams));
            }}
          />
        </FormControl>
      </div>
      <div></div>
    </>
  );
};
