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
            {news.map(item =>
              <NewsBox
                key={item.id}
                actions={item.actions}
                category={item.category}
                logo={item.logo}
                image={item.image}
                description={item.description} />
            )}
           </div>
        </div>
      </div>
    );
  }
}

export default Feed;
