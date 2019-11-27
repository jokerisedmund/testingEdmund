import React, { Component } from 'react';

import {
    
    StyleSheet,
    Image

} from 'react-native';

import { 
    Container, 
    Header, 
    View, 
    DeckSwiper, 
    Card, 
    CardItem, 
    Thumbnail, 
    Text, 
    Left, 
    Body, 
    Icon,
    Button
} from 'native-base';

const cards = [
  {
    text: 'First',
    name: '1)',
    image: require('../ImagesPromo/promo1.jpg'),
  },

  {
    text: 'Second',
    name: '2)',
    image: require('../ImagesPromo/promo2.jpg'),
  },

  {
    text: 'Third',
    name: '3)',
    image: require('../ImagesPromo/promo3.jpg'),
  },
  
];

class Notify extends React.Component {
    
    render() {
      console.log("NOTI")
      return (
        <Container>
            <Header />
            <View>
              <DeckSwiper
                ref={(c) => this._deckSwiper = c}
                dataSource={cards}
                renderEmpty={() =>
                  <View style={{ alignSelf: "center" }}>
                    <Text>Over</Text>
                  </View>
                }
                renderItem={item =>
                  <Card style={{ elevation: 3 }}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={item.image} />
                        <Body>
                          <Text>{item.text}</Text>
                          <Text note>One</Text>
                        </Body>
                      </Left>
                    </CardItem>

                    <CardItem cardBody>
                      <Image style={{ height: 300, flex: 1 }} source={item.image} />
                    </CardItem>

                    <CardItem>
                      <Icon name="heart" style={{ color: '#ED4A6A' }} />
                      <Text>{item.name}</Text>
                    </CardItem>
                  </Card>
                }
              />
            </View>
            <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
                <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
                  <Icon name="arrow-back" />
                  <Text>Swipe Left</Text>
                </Button>

                <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
                  <Icon name="arrow-forward" />
                  <Text>Swipe Right</Text>
                </Button>
            </View>
      </Container>
      );
    }
  }
  

  export default Notify;