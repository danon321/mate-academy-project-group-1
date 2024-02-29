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
  date: string;
}

export const Comment: React.FC<Comment> = ({ name, surname, text, date }) => {
  const fullName = name + ' ' + surname;

  const maxChars = 10;
  const [showFullContent, setShowFullContent] = useState<boolean>(false);
  const limitedContent: string = limitContent(text, maxChars);

  const toggleContent = (): void => {
    setShowFullContent(!showFullContent);
  };

  const todayDate = new Date();
  const todayDateMiliseconds = todayDate.getTime();

  const commentDate = date;
  const milisecondsComment = Date.parse(commentDate);

  const milisecondsElapsed = todayDateMiliseconds - milisecondsComment;
  console.log('różnica czasu w milisekundach: ', milisecondsElapsed);

  const second = 1000;
  const minute = 60 * second;
  const hour = 60 * minute;
  const day = 24 * hour;

  const textTimeElapsed =
    milisecondsElapsed > day * 2
      ? `${Math.floor(milisecondsElapsed / day)} days ago`
      : milisecondsElapsed > day
        ? `${Math.floor(milisecondsElapsed / day)} day ago`
        : milisecondsElapsed > hour * 2
          ? `${Math.floor(milisecondsElapsed / hour)} hours ago`
          : milisecondsElapsed > hour
            ? `${Math.floor(milisecondsElapsed / hour)} hour ago`
            : milisecondsElapsed > minute * 2
              ? `${Math.floor(milisecondsElapsed / minute)} minutes ago`
              : milisecondsElapsed > minute
                ? `${Math.floor(milisecondsElapsed / minute)} minute ago`
                : milisecondsElapsed > second * 2
                  ? `${Math.floor(milisecondsElapsed / second)} seconds ago`
                  : milisecondsElapsed > second
                    ? `${Math.floor(milisecondsElapsed / second)} second ago`
                    : '';

  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-header-context">
          <img src={avatar} alt="full name" className="comment-header-avatar" />
          <div className="comment-header-data">
            <p className="comment-header-full-name">{fullName}</p>
            <p className="comment-header-time">{textTimeElapsed}</p>
          </div>
        </div>
        <img src={more} alt="more" className="comment-more" />
      </div>
      <p className="comment-content">
        {showFullContent ? text : limitedContent}
      </p>
      {limitedContent.length > maxChars && (
        <button onClick={toggleContent} className="comment-read-more">
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
