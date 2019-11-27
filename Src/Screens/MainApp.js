import React, { Component } from 'react'
import Table, {Section,  StaticCell, BioCell, TouchableCell} from 'react-native-js-tableview';

import {
    
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,

} from 'react-native';


class MainApp extends Component {
  
  render() {
    console.log("HELLO")
    return(
      <Table style={styles.container} backgroundColor="#4DB6AC" scrollable={true}> 

            <Section header="Profile"> 
                <BioCell title="Xiao Ming" subtitle="400 points ." />
                <StaticCell title=" Edit Profile" accessory="disclosure" onPress={() => {this.props.navigation.navigate("EditSelf")}} />
                <StaticCell title=" My QR Code" accessory="disclosure" onPress={() =>  {this.props.navigation.navigate("ViewQR")}} />
                <StaticCell title=" Rewards" accessory="disclosure" onPress={() => {this.props.navigation.navigate("RewardsNavi")}} />
                <StaticCell title=" History" accessory="disclosure" onPress={() => {}} />
                <StaticCell title=" Notification" accessory="disclosure" onPress={() => {this.props.navigation.navigate("Notify")}} />
                <StaticCell title=" Settings" accessory="disclosure" onPress={() => {this.props.navigation.navigate("Settings")}} />
            </Section>

            {/* <Section>
               <TouchableCell title="Sign out" onPress={() => {}} />
            </Section> */}

        </Table>  
    );
  };
}

const styles = StyleSheet.create({
  container:{
    
  }

});
 
export default MainApp;