import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import UserPage from './../UserPage/UserPage.js';
import Header from './../../components/Header';
import SideBar from './../../components/SideBar';

class Feed extends Component {
  render() {
    return (
      <div className="root__wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <h1>hello feed</h1>
            <Switch>
              <Route exact path='/' component={Feed}/>
              <Route path='/profile' component={UserPage}/>
            </Switch>
        </div>
      </div>
    );
  }
}

export default Feed;
