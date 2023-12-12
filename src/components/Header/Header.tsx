import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="header__ul">
          <li>
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/add" className="header__link">
              Add
            </Link>
          </li>
          <li>
            <Link to="/user" className="header__link">
              User
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
