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
          height={280}
          animation={animation}
        />
      </div>
      <div className="info">
        <div className="details">
          <div className="details__datacontent">
            <h3 className="details__data"> <Skeleton animation={animation} /></h3>
            <h4 className="details__data"><Skeleton animation={animation} /></h4>
          </div>
          <div className="details__datacounter">
            <div className="details__counter">
              <p className="details__name"><Skeleton animation={animation} /></p>
              <p className="details__number"><Skeleton animation={animation} /></p>
            </div>
            <div className="details__counter">
              <p className="details__name"><Skeleton animation={animation} /></p>
              <p className="details__number"><Skeleton animation={animation} /></p>
            </div>
            <div className="details__counter">
              <p className="details__name"><Skeleton animation={animation} /></p>
              <p className="details__number"><Skeleton animation={animation} /></p>
            </div>
          </div>
        </div>
        <div className="about">
          <h2><Skeleton animation={animation} /></h2>
          <p className="about__content"><Skeleton animation={animation} /></p>
        </div>
      </div>
      <div className="photo">
        <Skeleton variant="circular" width={100} height={100} />
      </div>
    </div>
  );
};

