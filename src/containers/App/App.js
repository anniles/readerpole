import React, { Component } from 'react';

import './../../css/App.css';
import { NewsBox } from './../../components/NewsBox';
import Header from './../../components/Header';
import SideBar from './../../components/SideBar';

class App extends Component {
  render() {
    return (
      <div className="root__wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <div className="newsBox-container">

            {[...Array(6)].map((x, i) =>
              <NewsBox key={i} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
