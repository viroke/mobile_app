import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Actions } from 'react-native-router-flux';
import Inputs from '../components/input.js';
import UploadImage from '../components/uploadImage.js';
import * as Font from 'expo-font';

class ScrollViewExample extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      WorkSans: require("../assets/fonts/WorkSans-Bold.ttf"),
      WorkSansLight: require("../assets/fonts/WorkSans-Light.ttf"),
      WorkSansMedium: require("../assets/fonts/WorkSans-Medium.ttf"),
      WorkSansSemiBold: require("../assets/fonts/WorkSans-SemiBold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
  const  goToGetHome = () => {
      Actions.home()
   }
   if (!this.state.fontLoaded) {
    return null; // render some progress indicator
  }
  return (
    <ScrollView>
    <StatusBar style="auto" />
    <View style={styles.container}>
    <TouchableOpacity  onPress = {goToGetHome}>
    <AntDesign style={styles.icon} name="arrowleft" size={24}/>
    </TouchableOpacity>
      <Text style={styles.heading}>Complete Profile</Text>
      <Text style={styles.subHeading}>Register via your company email to connect with the people of your company.</Text>
      <UploadImage style="auto" />
      <Inputs style="auto" />

    </View>
    </ScrollView>
  )}
}
export default ScrollViewExample

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#18191D',
    paddingTop:50,
    paddingBottom:60,
  },

  heading:{
    color:'#D3D3D3',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 26,
    marginTop:20,
    lineHeight: 30,
    margin: 20,
    letterSpacing: -0.8,
    fontFamily:'WorkSansMedium',
  },

  subHeading:{
    color:'#919297',
    fontStyle: 'normal',
    fontWeight: 'normal',
    margin: 20,
    marginTop:10,
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: -0.3,
    fontFamily:'WorkSansMedium',
  },
  icon:{
    color:'#2F80ED',
    marginLeft:20,
    marginTop:0,
  },
});



