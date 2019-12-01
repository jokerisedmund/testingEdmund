import React, { Component } from 'react'

import {
    
    StyleSheet,
    View,
    Image,
    ScrollView,
    Dimensions

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
   Left, 
   Body, 
   Right,
   Icon
   
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

import AwesomeCons from 'react-native-vector-icons/dist/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

const { height } = Dimensions.get('window');

class SearchRewards extends React.Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    
    this.setState({ screenHeight: contentHeight });
  };

  constructor(props)
  {
    var tempArray = []
    super(props)

    this.state = {
      image : [],
      storageEmail:"",
      currentUser : {}
    }
    
    
    firebase.initializeApp(firebaseConfig);

    this.ref = firebase.firestore().collection("BrowseRewards");
    this.userRef = firebase.firestore().collection("users");

    AsyncStorage.getItem("email")
    .then((response) => {
      if(response !== null)
      {
        this.setState({
          storageEmail : response
        })
      }
    })
    
    this.userRef.onSnapshot((query) => {
      query.forEach((doc) => {
        console.log(doc.data().email)
        if(this.state.storageEmail === doc.data().email)
        {
          this.setState({currentUser : doc.data()})
        }
      })
    
  })


    this.ref.onSnapshot((query) => {
      query.forEach((doc) => {
         tempArray.push(doc.data())
      })
      this.setState({image : tempArray})
  })

    
  }


  redeemRewards = (rewardsPoint) => {
    console.log( this.state.currentUser.point - rewardsPoint )
  }
  
    render() {
      const scrollEnabled = this.state.screenHeight > height;

      return (  
       <ScrollView scrollEnabled={scrollEnabled}> 
        <Container>
        <Header />
        <Content>
        {this.state.image.map((data) => (
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../ImagesPromo/rewIcon.png')} />
                <Body>
                  <Text>{data.title}</Text>
                  <Text note>{data.category}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {/* <Image source={require('../ImagesPromo/browse1.jpg')} style={{height: 100, width: 100, flex: 1}}/> */}
              <Image source={{uri:data.BR1}} style={{height: 200, width: null, flex: 1}}  />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>{data.likes} Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <AwesomeCons name = "crown" style ={{fontSize : 15, color : 'green'}} />
                  <Text>{data.point} points</Text>
                </Button>
              </Body>
              <Right>
            {/* <Button primary onPress ={(rewardPoint) => {this.setState()}}><Text> Purchase </Text></Button>        */}
            <Button primary onPress ={() => this.redeemRewards(data.point)} style={styles.Button}><Text style={styles.Purchase}> Purchase </Text></Button>
              </Right>  
            </CardItem>
          </Card>
          ))}
        </Content>
       </Container>

       <Container>
        <Header />
        <Content>
        {this.state.image.map((data) => (
          <Card>
            <CardItem>
              <Left> 
                <Thumbnail source={require('../ImagesPromo/rewIcon.png')} />
                <Body>
                  <Text>{data.title}</Text>
                  <Text note>{data.category}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              {/* <Image source={require('../ImagesPromo/browse1.jpg')} style={{height: 100, width: 100, flex: 1}}/> */}
              <Image source={{uri:data.BR1}} style={{height: 200, width: null, flex: 1}}  />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>{data.likes} Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <AwesomeCons name = "crown" style ={{fontSize : 15, color : 'green'}} />
                  <Text>{data.point} points</Text>
                </Button>
              </Body>
              <Right>
            {/* <Button primary onPress ={(rewardPoint) => {this.setState()}}><Text> Purchase </Text></Button>        */}
            <Button primary onPress ={() => this.redeemRewards(data.point)} ><Text> Purchase </Text></Button>
              </Right>  
            </CardItem>
          </Card>
          ))}
        </Content>
       </Container>
      </ScrollView>
      );
    }
  }
  
  
const styles = StyleSheet.create({
 Button: {
   height: 40
 },

 Purchase:{
   justifyContent: 'center',
   paddingBottom: 15
 }
});
export default SearchRewards;