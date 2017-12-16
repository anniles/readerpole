import React, { Component } from 'react';

// import './../../css/Feed.css';
import Header from './../../components/Header';
import SideBar from './../../components/SideBar';

class UserPage extends Component {
  render() {
    return (
      <div className="root__wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <h1>hello UserPage</h1>
        </div>
      </div>
    );
  }
}

export default UserPage;
