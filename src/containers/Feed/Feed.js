import React, { Component } from 'react';

import './../../css/App.css';
import { NewsBox } from './../../components/NewsBox';
import Header from './../../components/Header';
import SideBar from './../../components/SideBar';

import { news } from './../../constants';

class Feed extends Component {
  render() {
    return (
      <div className="main">
        <div className="newsBox__wrapper">
           <div className="newsBox-container">
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
    );
  }
}

export default Feed;
