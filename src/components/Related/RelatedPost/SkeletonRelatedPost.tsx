import { Skeleton } from '@mui/material';

export const SkeletonRelatedPost = () => {
  const animation = 'wave';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const style: any = {
    backgroundColor: '#e5e5e54d',
  };

  return (
    <>
      <div className="relatedPost" style={{ ...style }}>
        <div className="relatedPost__button">
          <Skeleton
            sx={{ borderRadius: '8px' }}
            width={100}
            height={50}
            animation={animation}
          />
        </div>
        <div className="relatedPost__content">
          <p className="relatedPost__date">
            <Skeleton width={100} height={20} animation={animation} />
          </p>
          <p className="relatedPost__title">
            <Skeleton animation={animation} />
            <Skeleton animation={animation} />
          </p>
          <p className="relatedPost__description">
            <Skeleton animation={animation} />
            <Skeleton animation={animation} />
            <Skeleton animation={animation} />
          </p>
        </div>
      </div>
    </>
  );
};
