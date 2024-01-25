import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Burger from '../Burger/burger';
import Person2Icon from '@mui/icons-material/Person2';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import './header.scss';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      setIsVisible(currentScroll < lastScrollTop || currentScroll <= 0);
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  const handleMouseEnter = () => {
    setIsProfileMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsProfileMenuOpen(false);
  };

  return (
    <header className={`header ${isVisible ? '' : 'header--hidden'}`}>
      <nav className="navbar container">
        <div className="navbar__left">BLOG</div>
        <div className="burger">
          <Burger />
        </div>
        <div className="navbar__right">
          <div className="header-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'activeLink header-links__link'
                  : 'header-links__link'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive
                  ? 'activeLink header-links__link'
                  : 'header-links__link'
              }
            >
              O nas
            </NavLink>
            <NavLink
              to="/articles"
              className={({ isActive }) =>
                isActive
                  ? 'activeLink header-links__link'
                  : 'header-links__link'
              }
            >
              Artykuły
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? 'activeLink header-links__link'
                  : 'header-links__link'
              }
            >
              Postuj
            </NavLink>
          </div>
          <span className="separator"></span>
          <div
            className="profile-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="profile-icon">
              <AccountCircleOutlinedIcon />
            </div>
            {isProfileMenuOpen && (
              <div className="profile-menu">
                <ul>
                  <li>
                    <Person2Icon className="profile-menu__icon" />
                    <NavLink to="/users/2" onClick={handleMouseLeave}>
                      Profil
                    </NavLink>
                  </li>
                  <li>
                    <PermMediaIcon className="profile-menu__icon" />
                    <NavLink to="/users/posts" onClick={handleMouseLeave}>
                      Posty
                    </NavLink>
                  </li>
                  <li>
                    <SettingsIcon className="profile-menu__icon" />
                    <NavLink to="/users/settings" onClick={handleMouseLeave}>
                      Ustawienia
                    </NavLink>
                  </li>
                  <li>
                    <LogoutIcon className="profile-menu__icon" />
                    <NavLink to="/" onClick={handleMouseLeave}>
                      Wyloguj
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
