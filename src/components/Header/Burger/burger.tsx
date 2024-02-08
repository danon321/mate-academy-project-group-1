import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Person2Icon from '@mui/icons-material/Person2';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import './burger.scss';

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setIsOpen(open);
    };

  const handleMouseClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const list = () => (
    <List>
      <NavLink to="/" className="nav-link" onClick={toggleDrawer(false)}>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/about-us"
        className="nav-link"
        onClick={toggleDrawer(false)}
      >
        <ListItemButton>
          <ListItemText primary="O nas" />
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/articles"
        className="nav-link"
        onClick={toggleDrawer(false)}
      >
        <ListItemButton>
          <ListItemText primary="Artykuły" />
        </ListItemButton>
      </NavLink>
      <NavLink to="/add" className="nav-link" onClick={toggleDrawer(false)}>
        <ListItemButton>
          <ListItemText primary="Postuj" />
        </ListItemButton>
      </NavLink>
      <div className="nav-link" onClick={handleMouseClick}>
        <ListItemButton>
          <ListItemText className="burger-user" primary="Użytkownik" />
          <KeyboardArrowRightOutlinedIcon
            className={`burger-user__icon ${isProfileOpen ? 'burger-user__icon--open' : ''}`}
          />
        </ListItemButton>
        {isProfileOpen && (
          <div
            className={`profile__menu ${
              isProfileOpen ? 'profile__menu--open' : ''
            }`}
          >
            <ul>
              <li>
                <NavLink to="/users/2" onClick={toggleDrawer(false)}>
                  <Person2Icon />
                  Profil
                </NavLink>
              </li>
              <li>
                <NavLink to="/users/posts" onClick={toggleDrawer(false)}>
                  <PermMediaIcon />
                  Posty
                </NavLink>
              </li>
              <li>
                <NavLink to="/users/settings" onClick={toggleDrawer(false)}>
                  <SettingsIcon />
                  Ustawienia
                </NavLink>
              </li>
              <li>
                <NavLink to="/" onClick={toggleDrawer(false)}>
                  <LogoutIcon />
                  Wyloguj
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </List>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon className="burger__icon" />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        className="burger__drawer"
      >
        <div className="close-icon">
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        {list()}
      </Drawer>
    </div>
  );
};

export default Burger;
