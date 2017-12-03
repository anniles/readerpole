import React, { Component } from 'react';

import './../../css/App.css';
import { NewsBox } from './../../components/NewsBox';
import Header from './../../components/Header';
import SideBar from './../../components/SideBar';

import Bg1 from './../../images/1.jpg';
import Bg2 from './../../images/2.jpg';
import Bg3 from './../../images/3.jpg';
import Bg4 from './../../images/4.jpg';
import Bg5 from './../../images/5.jpg';
import Bg6 from './../../images/6.jpg';
import Bg7 from './../../images/7.jpg';
import Bg8 from './../../images/8.jpg';

const news = [
  {
    actions: 'you add it in wish read',
    title: 'politics',
    image: Bg1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'must read this',
    title: 'politics',
    image: Bg2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'it is red',
    title: 'politics',
    image: Bg3,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'not yet red',
    title: 'finanse',
    image: Bg4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'it is red',
    title: 'politics',
    image: Bg5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'your friend said its awesome',
    title: 'politics',
    image: Bg6,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'it is red',
    title: 'politics',
    image: Bg7,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
  {
    actions: 'it is red',
    title: 'politics',
    image: Bg8,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. labore reprehenderit aperiam!',
  },
];

class App extends Component {
  render() {
    return (
      <div className="root__wrapper">
        <SideBar />

        <div className="main">
          <Header />
          <div className="newsBox__wrapper">
             <div className="newsBox-container">
              {news.map((x, i) =>
                <NewsBox
                  key={i}
                  actions={x.actions}
                  title={x.title}
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

export default App;
