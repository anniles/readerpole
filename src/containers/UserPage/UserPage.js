import React, { Component } from 'react';
import { user, news } from './../../constants';
import './../../css/userPage.css';
import { NewsBox } from './../../components/NewsBox';

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

          <div className="profile__categories">
            <div className="profile__categories-title">
              <h2>Title</h2>
            </div>

            <div className="profile__categories-boxes">
             {news.map((x, i) =>
              <NewsBox
                key={i}
                actions={x.actions}
                title={x.title}
                logo={x.logo}
                image={x.image}
                description={x.description} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;
