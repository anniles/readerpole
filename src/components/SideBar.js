import React from 'react';
import GearIcon from './svg/GearIcon';
import { user, sideMenu } from './../constants';
import { getRpCategories } from './../utils';
import AddIcon from './svg/AddIcon';
import './../css/sideBar.css';

const SideBar = () => {
  const rpCategories = getRpCategories();

  return (
    <aside className="sideBar">
      <div className="sideBar__user">
        <div className="sideBar__user-avatar">
          <img src={user.avatar} alt={`${user.username} avatar`}/>
        </div>
        <h2>{user.username}</h2>
        <GearIcon />
      </div>

      <div className="sideBar__wrapper">
        <nav className="sideBar__menu">
          {
            Object.keys(sideMenu).map((key, index) => {
              return (
                <div key={index} className="sideBar__section">
                  <header>
                    <h3>{key}</h3>
                    <div className="sideBar__section-add"><AddIcon /></div>
                  </header>

                  {sideMenu[key].map((key, i) =>
                    <p key={i}>{key}</p>
                  )}
                </div>
              )
            })
          }
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;