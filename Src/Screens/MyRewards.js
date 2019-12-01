import React, { Component } from 'react'

import {
    
    StyleSheet,
    View,
    Image,


} from 'react-native';

import { 
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Thumbnail, 
  Text, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right 
} from 'native-base';

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
class MyRewards extends React.Component {

  constructor(props)
  {
    var tempArray = []
    super(props)

    this.state = {
      image : [],
    }
    
    
    firebase.initializeApp(firebaseConfig);

    this.ref = firebase.firestore().collection("MyRewards");
    

    this.ref.onSnapshot((query) => {
      query.forEach((doc) => {
         tempArray.push(doc.data())
      })
      this.setState({image : tempArray})
      console.log(this.state.image)
  })

    
  }

    render() {
      console.log(this.state.image)
      return (
        <Container>
        <Header />
        <Content>
          {this.state.image.map((data) => (
            <Card>
            <CardItem>
              <Left>
              <Thumbnail source={require('../ImagesPromo/rewIcon.png')} />
                <Body>
                  <Text>Promotion</Text>
                  <Text note>No 1</Text>
                </Body>
               
              </Left>
            </CardItem>
            <CardItem cardBody>
              {/* //<Image source={require('../ImagesPromo/rewards1.png')} style={{height: 200, width: null, flex: 1}}/>// */}
              <Image source={{uri:data.REW1}} style={{height: 200, width: null, flex: 1}}  />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                 <Text>Hello</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          ))}
        </Content>
      </Container>
      );
    }
  }
  

  export default MyRewards;