import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../screens/home.js';
import Register from '../screens/registration.js';
import Started from '../screens/getStarted.js';
import Onboarding from '../screens/onboarding.js';
import Session from '../screens/sessionStart.js';
import Profile from '../screens/profilePage.js';
import Discover from '../screens/discover.js';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Home"  hideNavBar = {true}/>
         <Scene key = "started" component = {Started} title = "Started"  hideNavBar = {true}/>
         <Scene key = "register" component = {Register} title = "Register"  hideNavBar = {true}/>
         <Scene key = "onboarding" component = {Onboarding} title = "Onboarding" initial = {true}  hideNavBar = {true}/>
         <Scene key = "session" component = {Session} title = "Session"  hideNavBar = {true}/>
         <Scene key = "profile" component = {Profile} title = "Profile"  hideNavBar = {true}/>
         <Scene key = "discover" component = {Discover} title = "Discover"  hideNavBar = {true}/>
      </Scene>
   </Router>
)
export default Routes