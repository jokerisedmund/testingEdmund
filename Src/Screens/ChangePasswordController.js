import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    Keyboard,
    TextInput,
    Alert,
   
} from 'react-native';

import PasswordInputText from 'react-native-hide-show-password-input';



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


class ChangePasswordController extends Component {
    
    static defaultProps = {   
        backgroundColor :"white",
        submitText:"Save",
        placeHolderCurrentPassword:"Current Password",
        placeHolderNewPassword:"New Password",
        placeHolderConfirmPassword:"Confirm Password"
    };

     
    constructor(props)
    {
        super(props)

        this.state = { 
            password: '',
            // icon: "eye-off"
        }
         firebase.initializeApp(firebaseConfig);
        
    }

    onbtnSavePress = () => {
       var ref = firebase.firestore().collection("users").doc("1jW7i38kQg16stfePez4");
    
        ref.update({
            password: this.state.password,
            
        })
      }

    // _changeIcon(){
    //     this.setState(prevState => ({
    //         icon: prevState.icon ==='eye' ? 'eye-off' : 'eye',
    //         password: !prevState.password
    //     }));
    // }

  

    render() {

        console.log("PASSWORD")

        const{icon, onChange} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
                    <View style={styles.inputView}>
                        <PasswordInputText style={styles.inputText} placeholder={this.props.placeHolderCurrentPassword}
                            multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false}
                            underlineColorAndroid={'transparent'}  secureTextEntry={true}
                            onChangeText={(currentPassword) => this.setState({currentPassword})} 
                            value={this.state.currentPassword} />

                            {/* </TextInput> */}
                            {/* <Icon name={this.state.icon} onPress={() => this._changeIcon()}/> */}
                    </View>

                    <View style={styles.inputView}>
                        <PasswordInputText style={styles.inputText} placeholder={this.props.placeHolderNewPassword}
                            multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} 
                            underlineColorAndroid={'transparent'}  secureTextEntry={true} 
                            onChangeText={(password) => this.setState({password})} 
                            value={this.state.password} />

                            {/* </TextInput> */}
                    </View>

                    <View style={styles.inputView}>
                        <PasswordInputText style={styles.inputText} placeholder={this.props.placeHolderConfirmPassword}
                            multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} 
                            underlineColorAndroid={'transparent'}  secureTextEntry={true} 
                            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                             value={this.state.confirmPassword} />

                             {/* </TextInput> */}

                             
                    </View>
                    
                    <TouchableOpacity style={styles.btnSave} activeOpacity={0.6} onPress={() => this.onbtnSavePress()}>
                        <Text style={styles.textSave} numberOfLines={1}>
                            {this.props.submitText}</Text>
                    </TouchableOpacity>
                 </View>

           
            </View>

            
           
        );
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    bottomView: {
        backgroundColor: 'white'
    },
    inputText: {
        paddingVertical: 5,
        color: '#3c3c3c',
        marginLeft: 10,
        fontSize: 14,
        textAlign: 'left'
    },
    inputView:{
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'flex-start',
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,
        borderColor: '#3c3c3c',
        overflow: 'hidden',
    },
    btnSave: {
        backgroundColor: '#00ACC1',
        paddingHorizontal: 30,
        height: 30,
        justifyContent: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        alignSelf: 'center',
        marginTop: 15
    },

    textSave: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 5
    }
   })
   
export default ChangePasswordController