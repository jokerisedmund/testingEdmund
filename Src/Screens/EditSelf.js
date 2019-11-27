import React, { Component } from 'react'

import {
    
    StyleSheet,
    View,
    Button

} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label, Body, Title } from 'native-base';

// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Firebase from '../config/Firebase'
// import { updateEmail, updatePassword, login, getUser } from '../actions/user'


class EditSelf extends Component {

  render() {

    componentDidMount = () => {
      Firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.props.getUser(user.uid)
          if (this.props.user != null) {
            this.props.navigation.navigate('Home')
          }
        }
      })
    }

    
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
                  <Input />
                </Item>

                <Item floatingLabel last>
                  <Label>Full Name: </Label>
                  <Input />
                </Item>

                
                <Item floatingLabel last>
                  <Label> Gender (M/F) ? :</Label>
                  <Input />
                </Item>

                <Item floatingLabel last>
                  <Label>IC: </Label>
                  <Input />
                </Item>

                
                <Item floatingLabel last>
                  <Label>Email: </Label>
                  <Input />
                </Item>

                
                <Item floatingLabel last>
                  <Label>Contact Number: </Label>
                  <Input />
                </Item>

              </Form>

              <View style={{ flexDirection: 'row'}}>
                <View style={styles.btnChange}>
                    <Button
                        title="Change"
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