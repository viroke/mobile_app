import React, { Component } from 'react';
import { StyleSheet, Text, StatusBar, View,TextInput, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Font from 'expo-font';

const { width, height } = Dimensions.get("window");

export default class Started extends React.Component {
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
  const  goToRegistration = () => {
      Actions.register()
   }
   if (!this.state.fontLoaded) {
    return null;
  }
  return (
    <ScrollView style={styles.body}>
        <StatusBar barStyle="light-content"/>
    <View style={styles.container}>
    <TouchableOpacity  onPress = {goToRegistration}>
    </TouchableOpacity>
      <Text style={styles.heading}>Get Started</Text>
      <Text style={styles.subHeading}>Sign up for new account, enter your email and get started</Text>
      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#BDBDBD"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email)
               }>
               <Text style = {styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
            <Text style={styles.text}>Already have an account?</Text>
            <TouchableOpacity  onPress = {goToRegistration}>
            <Text style={styles.login}>Log In</Text>
            </TouchableOpacity>


    </View>
    </ScrollView>
  )}
}
const styles = StyleSheet.create({
  body: {
    backgroundColor:'#18191D',
  },

  container: {
    backgroundColor:'#18191D',
    paddingTop:height-450,
    paddingBottom:85,

  },

  heading:{
    color:'#D3D3D3',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 26,
    marginTop:10,
    lineHeight: 30,
    margin: 20,
    letterSpacing: -0.8,
    fontFamily:'WorkSans',
  },

  input: {
    margin: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 3,
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.3,
    paddingLeft: 15,
    color: '#BDBDBD',
    backgroundColor:'#2A2B31',
    fontFamily:'WorkSansMedium',
 },
 submitButton: {
    backgroundColor: '#2F80ED',
    padding: 10,
    margin: 20,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.65,
    borderRadius: 4,
 },
 submitButtonText:{
    color: 'white',
    fontFamily:'WorkSansMedium',
    height:20,
    fontWeight: '500',
    fontSize: 17,
    lineHeight: 20,
   textAlign: 'center',
   letterSpacing: -0.3,

 },

  subHeading:{
    color:'#F2F2F2',
    fontStyle: 'normal',
    fontWeight: 'normal',
    margin: 20,
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.8,
    fontFamily:'WorkSansLight',
  },
  icon:{
    color:'#2F80ED',
    margin:20,
    marginTop:50,
  },

  text:{
    color:'#919297',
    fontStyle: 'normal',
    fontWeight: 'normal',
    margin: 10,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: -0.3,
    fontFamily:'WorkSansLight',
  },

  login:{
    color:'#2F80ED',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    margin: 10,
    alignItems:'center',
    textAlign:'center',
    justifyContent:'center',
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: -0.3,
    fontFamily:'WorkSansMedium',
  }
});