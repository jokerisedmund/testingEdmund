'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'; 
import MainApp from './Src/Screens/MainApp';
import EditSelf from './Src/Screens/EditSelf'
import ViewQR from './Src/Screens/ViewQR'
import RewardsNavi from './Src/Screens/RewardsNavi';
import Settings from './Src/Screens/Settings';
import Notify from './Src/Screens/Notify';

import createBottomTabNavigator  from 'react-navigation-tabs';
import SearchRewards from './Src/Screens/SearchRewards';
import MyRewards from './Src/Screens/MyRewards'
import createMaterialTopTabNavigator from 'react-native-tab-navigator';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppNavigator = createStackNavigator({  
 MainApp: {screen: MainApp},
 EditSelf : {screen :EditSelf},
 ViewQR : {screen: ViewQR},
RewardsNavi : {screen: RewardsNavi},
Settings: {screen: Settings},
Notify: {screen: Notify}

  
},{
  initialRouteName : 'MainApp', 
  headerMode : 'none'
})

// from here 
// const TabNavigator = createMaterialTopTabNavigator({
//   SearchRewards: {
//     screen: SearchRewards,
//     navigationOptions: {
//       tabBarLabel: 'Search',
//     },
//   },
//   MyRewards: {
//     screen: MyRewards,
//     navigationOptions: {
//       tabBarLabel: 'Purchase',
//     },
//   },

  
//  },
//  {
//   order : ["SearchRewards", "MyRewards"]
// }
//  );
// to here


const AppContainer = createAppContainer(AppNavigator) 


  

class App extends React.Component{
  
  render() {   

    return(
            <AppContainer />                                      
    );
  }
}


const styles = StyleSheet.create({
  container:{
    
  }

});

export default App;
