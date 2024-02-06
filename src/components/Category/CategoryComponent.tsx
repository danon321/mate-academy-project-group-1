import { Link } from 'react-router-dom';
import './categoryComponent.scss';
import { Category } from '../../types/category';
import React from 'react';

type Props = {
  category: Category;
};

export const CategoryComponent: React.FC<Props> = ({ category }: Props) => {
  return (
    <Link to={`/catgory/${category.id}/posts`}>
      <div
        style={{ backgroundImage: 'url(' + category.image + ')' }}
        className="category content"
      >
        <h3 className="content__title">{category.title}</h3>
        <p className="content__about">{category.about}</p>
      </div>
    </Link>
  );
};
