import React from 'react';
import face from './face2.jpg';
import landscape from './landscape.jpg';
import './user.scss';

const User = () => {
  return <div className="container">
    <div className="box1"><img src={landscape} className='landscape'/>
      <h1 className='motto'>motto (optionally)</h1>
    </div>
    <div className="box2">
      <div className='details'>
        <div className='datacontent'>
          <h3 className='data'>John Doe</h3>
          <h4 className='data'>Frontend Developer</h4>
        </div>
        <div className="columns">
          <div className='column'><p className='name'>posts</p><p className='number'>5</p></div>
          <div className='column'><p className='name'>likes</p><p className='number'>34</p></div>
          <div className='column'><p className='name'>dislikes</p><p className='number'>7</p></div>  
        </div></div>
      <div className='about'>
        <h2>About</h2>
        <p className='content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellendus incidunt optio iure quasi praesentium dignissimos unde ex dolorum repudiandae doloribus officia ratione eveniet perspiciatis facere impedit, laborum sint facilis!
        Quisquam praesentium eligendi molestias ducimus minus in doloribus ex aliquam quibusdam natus alias perspiciatis, officia ad et, saepe ab deserunt, odit corporis voluptatem! Praesentium culpa adipisci harum, quas ipsum tempore.</p>
      </div>
    </div>
    <div className="box3"><img src={face} className='face' /></div>
  </div>;
};

export default User;
