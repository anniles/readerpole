import React from 'react';
import FullLogo from './FullLogo';
import './../css/header.css';

const Header = () => {
  return (
    <div className="header">
      <div>
        <FullLogo />
      </div>
      <div>
        <p>Hello</p>
        <p>sing in</p>
      </div>
    </div>
  )
}

export default Header;