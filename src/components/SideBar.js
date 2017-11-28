import React from 'react';
import GearIcon from './GearIcon';
import './../css/sideBar.css';

const sideMenu = [
  'Sources',
  'Topics',
  'People'
];

const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sideBar__user">
        <img src="src/images/politics.jpg" alt=""/>
        <h2>Gerald</h2>
        <GearIcon />
      </div>

      <nav className="sideBar__menu">
        {sideMenu.map((title, i) => <h3 key={i}>{title}</h3>)}
      </nav>
    </aside>
  );
};

export default SideBar;