import React from 'react';
import './addComment.scss';
import user from './image-user-0.jpg';

const AddComment = () => {
  return (
    <>
      <div className="add-comment">
        <div className="add-comment__data">
          <img
            src={user}
            alt="Amelia Neti"
            className="add-comment__data-avatar"
          />
          <p className="add-comment__data-full-name">Amelia Neti</p>
        </div>
        <form className="add-comment__form">
          <input type="text" placeholder='What do you think about this post?' className="add-comment__form-input" />
          <button type="submit" disabled className='add-comment__form-submit'>Send respond</button>
        </form>
      
      </div>
    </>
  );
};

export default AddComment;
