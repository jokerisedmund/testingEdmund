import React, { Component } from 'react'
import Table, {Section,  StaticCell, BioCell, TouchableCell} from 'react-native-js-tableview';
import AsyncStorage from '@react-native-community/async-storage';
import {
    
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,

} from 'react-native';

import firebase from 'react-native-firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBfEHXWHWC9wXxiA8sb7uTSAG2bTtf4w74",
  authDomain: "rewards-2a8c5.firebaseapp.com",
  databaseURL: "https://rewards-2a8c5.firebaseio.com",
  projectId: "rewards-2a8c5",
  storageBucket: "rewards-2a8c5.appspot.com",
  messagingSenderId: "689439198081",
  appId: "1:689439198081:web:51583871eeeac38ac57680",
  measurementId: "G-VM8GM6ZMPZ"
};


class MainApp extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email : "joker@gmail.com",  
      currentUser : {}
    }

    AsyncStorage.setItem("email" , "joker@gmail.com") 

     
     firebase.initializeApp(firebaseConfig);

    // AsyncStorage.getItem("email")
    // .then((response) => {
    //   if(response !== null)
    //   {
    //     this.setState({
    //       email : response
    //     })
    //   }
    // })

    this.userRef = firebase.firestore().collection("users");

    
    this.userRef.onSnapshot((query) => {
      query.forEach((doc) => {
        console.log(doc.data().email)
        if(this.state.email === doc.data().email)
        {
          this.setState({currentUser : doc.data()})
        }
      })
    
  })




  }

  
  
  
  render() {
    console.log("HELLO")
    return(
      <Table style={styles.container} backgroundColor="#4DB6AC" scrollable={true}> 
           
           {/* {this.state.email.map((data) => (  ))} */}
            <Section header="Profile"> 
           
                <BioCell title={this.state.currentUser.name} subtitle={this.state.currentUser.point + " point(s)"} />
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