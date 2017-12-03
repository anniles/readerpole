import React from 'react';
import FullLogo from './FullLogo';
import SearchIcon from './SearchIcon';
import './../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <ul className="header__nav">
        <li>
          <p>FEED</p>
        </li>
        <li>
          <p>PROFILE</p>
        </li>
        <li>
          <p>DISCOVER</p>
        </li>
      </ul>

      <div className="header__search">
        <div className="header__search--icon"><SearchIcon /></div>
        <input type="text"/>
      </div>

      <div className="header__logo">
        <FullLogo />
      </div>
    </div>
  )
}

export default Header;