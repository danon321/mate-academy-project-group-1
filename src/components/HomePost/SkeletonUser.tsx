import React from 'react';
import { Skeleton } from '@mui/material';

export const SkeletonUser = () => {
  const animation = 'wave';

  return (
    <div className="container user">
      <div className="background">
        <Skeleton
          variant="rectangular"
          width={1300}
          height={90}
          animation={animation}
          sx={{ borderRadius: '10px' }}
        />
      </div>
      <div className="info">
        <div className="details">
          <div className="details__datacontent">
            <h3 className="details__data">
              {' '}
              <Skeleton animation={animation} width="40%" />
            </h3>
            <h4 className="details__data">
              <Skeleton animation={animation} width="40%" />
            </h4>
          </div>
          <div className="details__datacounter">
            <div className="details__counter">
              <p className="details__name">
                <Skeleton animation={animation} width="20%" />
              </p>
              <p className="details__number">
                <Skeleton animation={animation} width="10%" />
              </p>
            </div>
            <div className="details__counter">
              <p className="details__name">
                <Skeleton animation={animation} width="20%" />
              </p>
              <p className="details__number">
                <Skeleton animation={animation} width="10%" />
              </p>
            </div>
            <div className="details__counter">
              <p className="details__name">
                <Skeleton animation={animation} width="20%" />
              </p>
              <p className="details__number">
                <Skeleton animation={animation} width="10%" />
              </p>
            </div>
          </div>
        </div>
        <div className="about">
          <h2>
            <Skeleton animation={animation} width="10%" />
          </h2>
          <p className="about__content">
            <Skeleton animation={animation} width="100%" />
          </p>
          <p className="about__content">
            <Skeleton animation={animation} width="95%" />
          </p>
          <p className="about__content">
            <Skeleton animation={animation} width="100%" />
          </p>
          <p className="about__content">
            <Skeleton animation={animation} width="95%" />
          </p>
        </div>
      </div>
      <div className="photo">
        <Skeleton variant="circular" width={100} height={100} />
      </div>
    </div>
  );
};
