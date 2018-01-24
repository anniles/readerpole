import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom'

import App from './../containers/App/App.js';
import UserPage from './../containers/UserPage/UserPage.js';
import Discover from './../containers/Discover/Discover.js';

import FullLogo from './svg/FullLogo';
import SearchIcon from './svg/SearchIcon';
import './../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <ul className="header__nav">
        <li><NavLink to="/feed">FEED</NavLink></li>
        <li><NavLink to="/profile">PROFILE</NavLink></li>
        <li><NavLink to="/discover">DISCOVER</NavLink></li>
      </ul>

      <div className="header__search">
        <div className="header__search-icon"><SearchIcon /></div>
        <input type="text"/>
      </div>

      <div className="header__logo">
        <FullLogo />
      </div>
    </div>
  )
}

export default Header;
