import React from 'react';
import GearIcon from './GearIcon';
import './../css/sideBar.css';

const sideMenu = {
  'Sources': ['papos', 'fia', 'three'],
  'Topics': ['one', 'two', 'three'],
  'People': ['one', 'two', 'three'],
}

const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sideBar__user">
        <img src="src/images/politics.jpg" alt=""/>
        <h2>Gerald</h2>
        <GearIcon />
      </div>

      <div className="sideBar__wrapper">
        <nav className="sideBar__menu">
          {
            Object.keys(sideMenu).map((key, index) => {
              return (
                <div key={index}>
                  <h3>{key}</h3>
                  {sideMenu[key].map((key, i) => {
                    return (
                      <p key={i}>{key}</p>
                    )
                  })}
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