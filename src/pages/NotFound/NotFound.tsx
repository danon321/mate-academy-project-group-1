import React from 'react';
import './notFound.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Sad } from './sad.svg';

const NotFound = () => {
  return (
    <>
      <div className="container notFound">
        <div className="notFound__text">
          <h1 className="notFound__text-error">404</h1>
          <h2 className='notFound__text-info'>Przepraszamy,<br />strona nie została znaleziona</h2>
          <div className="notFound__text-backToMain">
            <Link to="/">
              <p className='notFound__text-backToMain-link'>Powrót do Strony Głównej</p>
            </Link>
          </div>
        </div>
        <div className="notFound__emoji">
          <Sad />
        </div>
      </div>
    </>
  );
};

export default NotFound;
