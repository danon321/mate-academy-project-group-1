import React, { useState } from 'react';
import './comment.scss';
import avatar from './Ellipse 4.jpg';
import more from './more-horiz.svg';
import rate from './rate-up.svg';
import reply from './reply-rounded.svg';
import { limitContent } from '../../utils/limitContent/limitContent';

interface Comment {
  id: string;
  name: string;
  surname: string;
  text: string;
}

export const Comment: React.FC<Comment> = ({ name, surname, text }) => {
  const fullName = name + ' ' + surname;

  const maxChars = 10;
  const [showFullContent, setShowFullContent] = useState<boolean>(false);
  const limitedContent: string = limitContent(text, maxChars);

  const toggleContent = (): void => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className='comment'>
      <div className="comment-header">
        <div className="comment-header-context">
          <img src={avatar} alt="full name" className="comment-header-avatar" />
          <div className="comment-header-data">
            <p className="comment-header-full-name">{fullName}</p>
            <p className="comment-header-time">
              <span className="comment-header-num-of-days">26</span> days ago
            </p>
          </div>
        </div>
        <img src={more} alt="more" className="comment-more" />
      </div>
      <p className="comment-content">
        {showFullContent ? text : limitedContent}
      </p>
      {limitedContent.length > maxChars && (
        <button onClick={toggleContent} className='comment-read-more'>
          {showFullContent ? 'Read less' : 'Read more'}
        </button>
      )}
      <div className="comment-rating">
        <img src={rate} alt="rate up" className="comment-rating-up" />
        <p className="comment-rating-number">26</p>
        <img src={reply} alt="reply" className="comment-rating-reply" />
      </div>
    </div>
  );
};
