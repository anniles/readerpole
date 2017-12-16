import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Feed from './../containers/Feed/Feed.js';
import UserPage from './../containers/UserPage/UserPage.js';
import Discover from './../containers/Discover/Discover.js';


const Main = () => (
  <main>
    <Switch>
      <Route exact path="/feed" component={Feed}/>
      <Route exact path="/profile" component={UserPage}/>
      <Route exact path="/discover" component={Discover}/>
    </Switch>
  </main>
)

export default Main
