'use strict';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Tab , Tabs, Container , Header, Left, Body, Right} from 'native-base'

import SearchRewards from './SearchRewards'
import MyRewards from './MyRewards'
import Icons from 'react-native-vector-icons/Entypo'


class RewardsNavi extends React.Component {
  render() {
    console.log("REWARDS")
    return (
      <Container>

        <Header hasTabs>
            <Left>
              <Icons name ="chevron-thin-left" color ='black' size = {18}/>
            </Left>
            <Body>
              <Text style={styles.header}>Reward Page</Text>
            </Body>
            <Right/>
        </Header>

        <Tabs>
          <Tab heading="Browse">
            <SearchRewards navigation = {this.props.navigation}/>
            
          </Tab>
          <Tab heading="My Rewards">
            <MyRewards navigation = {this.props.navigation}/>
          </Tab>
        </Tabs>

      </Container>
    );
  }
}  

const styles = StyleSheet.create({
 header: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 15
 }
})

export default RewardsNavi;

