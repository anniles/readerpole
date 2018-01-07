import React, { Component } from 'react';
import { user, news } from './../../constants';

class UserPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="profile__wrapper">
          <div className="profile__user">
            <div className="profile__user-avatar">
              <img src={user.avatar} alt={`${user.username} avatar`}/>
            </div>

            <div className="profile__user-info">
              <p>{user.firstName} {user.lastName}</p>
              <p>{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
