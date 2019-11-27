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


import AwesomeCons from 'react-native-vector-icons/dist/FontAwesome';

const { height } = Dimensions.get('window');

class SearchRewards extends React.Component {
  state = {
    screenHeight: 0,
  };

  onContentSizeChange = (contentWidth, contentHeight) => {
    
    this.setState({ screenHeight: contentHeight });
  };



    render() {
      console.log("Browse Rew")
      const scrollEnabled = this.state.screenHeight > height;

      return (  
       <ScrollView scrollEnabled={scrollEnabled}> 
        <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../ImagesPromo/rewIcon.png')} />
                <Body>
                  <Text>50% OFF</Text>
                  <Text note>Parking Fee</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../ImagesPromo/browse1.jpg')} style={{height: 100, width: 100, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <AwesomeCons name = "crown" style ={{fontSize : 15, color : 'green'}} />
                  <Text>50 points</Text>
                </Button>
              </Body>
              <Right>
              <Button primary><Text> Purchase </Text></Button>       
              </Right>  
            </CardItem>
          </Card>

                
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../ImagesPromo/rewIcon.png')} />
                <Body>
                  <Text>50% OFF</Text>
                  <Text note>Parking Fee</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../ImagesPromo/browse2.png')} style={{height: 100, width: 100, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <AwesomeCons name = "crown" style ={{fontSize : 15, color : 'green'}} />
                  <Text>50 points</Text>
                </Button>
              </Body>
              <Right>
              <Button primary><Text> Purchase </Text></Button>       
              </Right>  
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../ImagesPromo/rewIcon.png')} />
                <Body>
                  <Text>50% OFF</Text>
                  <Text note>Parking Fee</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../ImagesPromo/browse3.png')} style={{height: 100, width: 100, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <AwesomeCons name = "crown" style ={{fontSize : 15, color : 'green'}} />
                  <Text>50 points</Text>
                </Button>
              </Body>
              <Right>
              <Button primary><Text> Purchase </Text></Button>       
              </Right>  
            </CardItem>
          </Card>

  


        </Content>
       </Container>
      </ScrollView>
      );
    }
  }
  
  
const styles = StyleSheet.create({
 
});
export default SearchRewards;