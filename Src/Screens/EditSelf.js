import React, { Component } from 'react'

import {
    
    StyleSheet,
    View,
    Button

} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label, Body, Title, Text , Number} from 'native-base';


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


class EditSelf extends Component {

  constructor(props)
  {
      super(props)

      this.state = { 
        userName: '',
        name: '',
        gender: '',
        icno: '',
        email: '',
        contact: '',

      }
      firebase.initializeApp(firebaseConfig);
      
  }

  
    insert = () => {
      this.state ={
        input:''
      }
    }

    UpdateData = () => {
     
      var ref = firebase.firestore().collection("users").doc("1jW7i38kQg16stfePez4");
   
       ref.update({
           userName: this.state.userName,
           name: this.state.name,
           gender: this.state.gender,
           icno: this.state.icno,
           email: this.state.email,
           contact: this.state.contact,
           
       })
     }
  
 

  render() {

  

    
    console.log("SELF")
    return(

        
        
  
      <Container>
         <Header>
            <Body>
              <Title style={styles.header}>Edit Profile Details</Title>
            </Body>
        </Header>
           
          <Content>
              <Form>
                <Item floatingLabel>
                  <Label>User Name:</Label>
                  <Input onChangeText = {(input) => this.setState({userName : input})}/>
                </Item>

                <Item floatingLabel last>
                  <Label>Full Name: </Label>
                  <Input onChangeText = {(input) => this.setState({name : input})} />
                </Item>

                
                <Item floatingLabel last>
                  <Label> Gender (M/F) ? :</Label>
                  <Input onChangeText = {(input) => this.setState({gender : input})}/>
                </Item>

                <Item floatingLabel last>
                  <Label>IC: </Label>
                  <Input onChangeText = {(input) => this.setState({icno : input})}/>
                </Item>

                
                <Item floatingLabel last>
                  <Label>Email: </Label>
                  <Input onChangeText = {(input) => this.setState({email : input})}/>
                </Item>

                
                <Item floatingLabel last>
                  <Label>Contact Number: </Label>
                  <Input onChangeText = {(input) => this.setState({contact : input})}/>
                </Item>

              </Form>

              <View style={{ flexDirection: 'row'}}>
                <View style={styles.btnChange}>
                    <Button
                        title="Change"
                        onPress = {() => this.UpdateData()}
                    />
                </View>

                    
                <View style={styles.btnCancel}>
                    <Button
                        title="Cancel"
                    />
                </View>                  
              </View>           
           </Content>
        
      </Container>

    );
  };
}

const styles = StyleSheet.create({
  container:{
    
  },

 btnChange:{
   padding: 10,
   marginHorizontal: 50,
   marginVertical: 20,
   paddingLeft: 60
   
 },

 btnCancel: {
   padding: 10,
   marginHorizontal: -20,
   marginVertical: 20,
 },

 header: {
  paddingLeft:15,
 }

});
 

// const mapDispatchToProps = dispatch => {
// 	return bindActionCreators({ updateEmail, updatePassword, login, getUser }, dispatch)
// }

// const mapStateToProps = state => {
// 	return {
// 		user: state.user
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(EditSelf)

export default EditSelf;