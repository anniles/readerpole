import React from 'react';
import GearIcon from './GearIcon';
import './../css/sideBar.css';
import Bg1 from './../images/1.jpg';

const sideMenu = {
  'Sources': ['papos', 'fia', 'three'],
  'Topics': ['one', 'two', 'three'],
  'People': ['one', 'two', 'three'],
}

const user = {
  'name' : 'Apos',
  'avatar': Bg1,
}

const SideBar = () => {
  return (
    <aside className="sideBar">
      <div className="sideBar__user">
        <div className="sideBar__user-avatar">
          <img src={user.avatar} alt={`${user.name} avatar`}/>
        </div>
        <h2>{user.name}</h2>
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