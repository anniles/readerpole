import React, { Component } from 'react';
import logo from './../../images/logo.svg';
import './../../css/App.css';
import { NewsBox } from './../../components/NewsBox';
import Header from './../../components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="newsBox-container">

          {[...Array(6)].map((x, i) =>
            <NewsBox key={i} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
