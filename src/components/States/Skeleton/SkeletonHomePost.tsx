import { Skeleton } from '@mui/material';

export const SkeletonHomePost = () => {
  const animation = 'wave';

  return (
    <div className="post-container">
      <Skeleton
        variant="rectangular"
        width={310}
        height={280}
        animation={animation}
      />
      <div className="post-section">
        <div className="post-date">
          <p>
            <Skeleton animation={animation} width="40%" />
          </p>
        </div>
        <div className="post-title">
          <Skeleton animation={animation} />
          <Skeleton animation={animation} />
        </div>
        <div className="post-description">
          <p>
            <Skeleton animation={animation} />
            <Skeleton animation={animation} />
            <Skeleton animation={animation} />
          </p>

          <a className="read-more">
            <Skeleton animation={animation} width="50%" className="read-more" />
          </a>
        </div>
        <div className="avatar__grid">
          <Skeleton
            variant="circular"
            width={48}
            height={48}
            className="avatar__img"
          />
          <Skeleton animation={animation} className="avatar__name" />
          <Skeleton animation={animation} className="avatar__title" />
        </div>
      </div>
    </div>
  );
};
