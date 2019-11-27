import React, { Component } from 'react'

import {
    
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView,
  Keyboard,
  TextInput
} from 'react-native';

import ChangePasswordController from './ChangePasswordController';

class Settings extends Component {
  
  constructor(props) {
      super(props);
      this.state = {

      };
  }

render() {
  console.log("SETTINGS")
  return (
    <View style={{flex:1, margin: 10, backgroundColor:'white' }}>
      <Text style={styles.header}>Settings</Text>
      <ChangePasswordController backgroundColor='white' submitText='Done' placeHolderCurrentPassword='Old Password' placeHolderNewPassword='New Password' placeHolderConfirmPassword='Confirm Password' />
    </View>
  );
}
}

const styles = StyleSheet.create({
  header: {
     alignContent: 'center',
     color: 'purple',
     fontSize: 30,
     paddingLeft: 138
  }
 })
export default Settings;