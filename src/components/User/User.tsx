import React from 'react';
import abatar from './face2.jpg';
import landscape from './landscape.jpg';
import './user.scss';

const User = () => {
  return (
    <div className="page">
      <div className="background">
        <img src={landscape} className="background__landscape" />
        <h1 className="background__motto">motto (optionally)</h1>
      </div>
      <div className="info">
        <div className="details">
          <div className="details__datacontent">
            <h3 className="details__data">John Doe</h3>
            <h4 className="details__data">Frontend Developer</h4>
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
          <p className="about__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            repellendus incidunt optio iure quasi praesentium dignissimos unde
            ex dolorum repudiandae doloribus officia ratione eveniet
            perspiciatis facere impedit, laborum sint facilis! Quisquam
            praesentium eligendi molestias ducimus minus in doloribus ex aliquam
            quibusdam natus alias perspiciatis, officia ad et, saepe ab
            deserunt, odit corporis voluptatem! Praesentium culpa adipisci
            harum, quas ipsum tempore.
          </p>
        </div>
      </div>
      <div className="photo">
        <img src={abatar} className="photo__avatar" />
      </div>
    </div>
  );
};

export default User;
