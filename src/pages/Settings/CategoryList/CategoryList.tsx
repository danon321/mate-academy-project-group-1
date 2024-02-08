import React from 'react';
import './categoryList.scss';

interface CategoryListProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  activeCategory,
  onCategoryClick,
}) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          key={category}
          className={`category-item ${
            category === activeCategory ? 'active' : ''
          }`}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;