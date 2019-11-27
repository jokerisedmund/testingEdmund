import React, {Component} from 'react';

import {
   Text, 
   View,
   StyleSheet,
   TextInput
} from 'react-native';




import QRCode from 'react-native-qrcode-svg';



class ViewQR extends Component {

    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    render() {
      console.log("QR")
      return(
       <View style={styles.containerQR}>
           <Text style={styles.QrText}> My QR Code</Text>

            <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text: text})}
                value={this.state.text}
                />

            <QRCode style={styles.QrLogo}
                value="https://reactnativeforyou.com"
                />

       </View>
      );
    };
  }


const styles = StyleSheet.create({
    containerQR:{
      backgroundColor: '#1de5e8',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 10,
    },
  
    QrText: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        color: '#1800d0',
        fontSize: 30,
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },

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