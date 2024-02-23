import { useEffect } from 'react';
import { fetchCategories } from '../../api/services/fetchPost';
import {
  useAppDispatch,
  useCategorySelector,
} from '../../app/redux/hooks/hooks';
import { CategoryComponent } from '../Category/CategoryComponent';

import './categories.scss';

export const Categories = () => {
  const categories = useCategorySelector(
    (state) => state.categories.categories
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dataLoading = async () => {
      const categories = await fetchCategories();
      dispatch(categories);
    };

    dataLoading();
  }, []);

  return (
    <div className="container categories">
      <h1>Categories</h1>
      <div className="categories__grid">
        {categories.map((category) => (
          <CategoryComponent key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};
