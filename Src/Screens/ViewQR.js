import React, {Component} from 'react';

import { 
   
   StyleSheet,
   TextInput,
   Dimensions
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View} from 'native-base';


import QRCode from 'react-native-qrcode-svg';



class ViewQR extends Component {

  state = {
    text: 'http://facebook.github.io/react-native/',
};

  render() {
    console.log("QR")
    const {height: screenHeight} = Dimensions.get('window');
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>My QR Code</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <View style={{flex: 1, height: screenHeight, justifyContent: 'center', paddingLeft: 70, paddingBottom: 140}}>
            
          <QRCode size={250}  logoMargin={2}  logoBorderRadius={15} logoSize={30} 
                value="www.qrcode-monkey.com"
                />
          
          </View>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }

  }


const styles = StyleSheet.create({
  
    QrLogo: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100',
        height: '100',
        margin: '100',
       
        
    }

  });
  

 

export default ViewQR;