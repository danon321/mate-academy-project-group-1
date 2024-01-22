import React, { useEffect, useState } from 'react';
import { SkeletonUser } from '../../components/States/Skeleton/SkeletonUser';
import './user.scss';
import { useUserSelector } from '../../app/redux/hooks/hooks';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const userId = Number(id);
  const user = useUserSelector((state) =>
    state.users.users.find((user) => user.id === userId)
  );

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (

    <>
      {(loading && <SkeletonUser />) || (
        <div className="container user">
          <div className="background">
            <img src={user?.background} className="background__landscape" />
            <h1 className="background__motto">{/*user?.motto */}</h1>
          </div>
          <div className="info">
            <div className="details">
              <div className="details__datacontent">
                <h3 className="details__data">{`${user?.name} ${user?.surname}`}</h3>
                <h4 className="details__data">{user?.title}</h4>
              </div>
              <div className="details__datacounter">
                <div className="details__counter">
                  <p className="details__name">posts</p>
                  <p className="details__number">5</p>
                </div>
                <div className="details__counter">
                  <p className="details__name">likes</p>
                  <p className="details__number">34</p>
                </div>
                <div className="details__counter">
                  <p className="details__name">dislikes</p>
                  <p className="details__number">7</p>
                </div>
              </div>
            </div>
            <div className="about">
              <h2>About</h2>
              <p className="about__content">{user?.about}</p>
            </div>
          </div>
          <div className="photo">
            <img src=""{/* user?.avatar */} className="photo__avatar" />
          </div>
        </div>) 
      }
    </>
  );
};

export default User;