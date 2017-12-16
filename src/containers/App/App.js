import React, { Component } from 'react';

import './../../css/App.css';
import { NewsBox } from './../../components/NewsBox';
import Header from './../../components/Header';
import SideBar from './../../components/SideBar';
import Main from './../../components/Main';

import { news } from './../../constants';

class App extends Component {
  render() {
    return (
      <div className="root__wrapper">
        <SideBar />

        <div className="">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
