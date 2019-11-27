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
    Alert
} from 'react-native';

// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Firebase from '../config/Firebase'
// import {  updatePassword } from '../actions/user'



class ChangePasswordController extends Component {
    /**
     * Default props
     */
    static defaultProps = {   
        backgroundColor :"white",
        submitText:"Save",
        placeHolderCurrentPassword:"Current Password",
        placeHolderNewPassword:"New Password",
        placeHolderConfirmPassword:"Confirm Password"
    };

    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            currentPassword: "",
            confirmPassword: ""
        };
    }

    /**
     * Button Save pressed 
     */
    onbtnSavePress() {
        if (this.state.currentPassword.trim().length == 0) {
            console.log("Please enter current password");

        } else if (this.state.newPassword.trim().length == 0) {
            console.log("Please enter new password");
            
        } else if (this.state.newPassword != this.state.confirmPassword) {
            console.log("Password dose not match");

        } else {
            Keyboard.dismiss();
            this.changePassword();
        }
    }

    /**
     * Call your webservice for update password
     */
    // reauthenticate = (currentPassword) => {

        changePassword = () => {
            // this.reauthenticate(this.state.currentPassword).then(() => {
                
            // })    
            //     var users = firebasebase.auth().users;
            //     users.updatePassword(this.state.newPassword).then(()=>{
                    
            //         Alert.alert("Password was changed");
        
            //     }).catch((error)=>{
                    
            //         Alert.alert(error.message);
        
            //     });


            // }
    }
    

    //here 
        // firebase.database().ref('users/ParkingFYP').update({
        //     name : 'ParkingFYP';
        // });
    // here 

    render() {
        console.log("PASSWORD")
        return (
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
                    <View style={styles.inputView}>
                        <TextInput style={styles.inputText} placeholder={this.props.placeHolderCurrentPassword}
                            multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(currentPassword) => this.setState({currentPassword})} value={this.state.currentPassword}></TextInput>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput style={styles.inputText} placeholder={this.props.placeHolderNewPassword}
                            multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(newPassword) => this.setState({newPassword})} value={this.state.newPassword}></TextInput>
                    </View>

                    <View style={styles.inputView}>
                        <TextInput style={styles.inputText} placeholder={this.props.placeHolderConfirmPassword}
                            multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword}></TextInput>
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