import * as React from 'react';
import { View } from 'react-native';
import Homescreen from './Screens/Home'
import News from './Screens/News'
import Sunny from './Screens/Weather'
import Stars from './Screens/Zodiac'
import Riddle from './Screens/Joke'
import A1 from './Screens/A1'
import A2 from './Screens/A2'
import A3 from './Screens/A3'
import A4 from './Screens/A4'
import A5 from './Screens/A5'
import A6 from './Screens/A6'

import {createAppContainer, createSwitchNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <View>
       <AppContainer/>
      </View>
    );
  }
}
var AppNavigator=createSwitchNavigator( {
  Homescreen:Homescreen,News:News,Sunny:Sunny,Stars:Stars, Riddle:Riddle,A1:A1,A2:A2,A3:A3,A4:A4,A5:A5,A6:A6
})
const AppContainer = createAppContainer(AppNavigator)