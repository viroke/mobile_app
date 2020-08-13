import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Router/router.js';

class reactTutorialApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)






// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import Registration from './screens/registration.js'



// const App = () => {
//    return (
     
//       <Registration />
//    )
// }
// export default App