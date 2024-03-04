import React from 'react';

interface TimeElapsedProps {
  startDate: Date;
}

export const TimeElapsed: React.FC<TimeElapsedProps> = ({ startDate }) => {
  const timeElapsed = calculateTimeElapsed(startDate);

  function calculateTimeElapsed(startDate: Date): string {
    const now = new Date();
    const elapsed = now.getTime() - startDate.getTime();

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let result = '';

    switch (true) {
    case years > 0:
      result = `${years} ${years === 1 ? 'year' : 'years'} ago`;
      break;
    case months > 0:
      result = `${months} ${months === 1 ? 'month' : 'months'} ago`;
      break;
    case days > 0:
      result = `${days} ${days === 1 ? 'day' : 'days'} ago`;
      break;
    case hours > 0:
      result = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
      break;
    case minutes > 0:
      result = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
      break;
    default:
      result = `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }

    return result;
  }

  return <p className="comment-header-time">{timeElapsed}</p>;
};
