import React, { Component, useState } from 'react';
import { StyleSheet, Text, StatusBar, View,TextInput, Dimensions, 
  TouchableOpacity, ScrollView, ToastAndroid
} 
  from 'react-native';
import { Actions } from 'react-native-router-flux';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { VERIFY_EMAIL, LOGIN_USER } from '../api/login';
// import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from 'react-native-paper';
import { SimpleAnimation } from 'react-native-simple-animations';
import { saveToken } from '../store';

const { width, height } = Dimensions.get("window");  
const passwordDisplay = 'none';
const emailDisplay = "flex";

export default Started => {

  const [email, setEmail] = useState("koryoesz@gmail.com");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showEmail, setShowEmail] = useState(true);
  const [error, setError] = useState("");

 const loadAssetsAsync =  async () => {
    await Font.loadAsync({
      WorkSans: require("../assets/fonts/WorkSans-Bold.ttf"),
      WorkSansLight: require("../assets/fonts/WorkSans-Light.ttf"),
      WorkSansMedium: require("../assets/fonts/WorkSans-Medium.ttf"),
      WorkSansSemiBold: require("../assets/fonts/WorkSans-SemiBold.ttf")
    });
  }

  loadAssetsAsync();

  const onSubmit = async () => {
    setIsloading(true);

    const CALLBACK = (response, data) => {
      setIsloading(false);

      if (response.error) {
        //  Actions.push("home");
        setShowPassword(true);
        setShowEmail(false);
      }

      if (!response.success) {
        let msg = response.errors;
        setError(msg);
      }
    };

    const LOGIN_CALLBACK = (response, data) => {
      setIsloading(false);

      if (response.code === 200) {
          saveToken(response.data.bearerToken);
          Actions.push("home");
      }else{
        ToastAndroid.show("Invalid Credentials", ToastAndroid.SHORT);
      }

      if (!response.success) {
        let msg = response.errors;
        setError(msg);
      }
    };

    const onError = (err) => {
      setIsloading(false);

      setError("Server Error");
    };
    if(!password){
      VERIFY_EMAIL(email, CALLBACK, onError);
    }
    else{
        var body = { password, email};
        LOGIN_USER(body, LOGIN_CALLBACK, onError);
    }
  };

  const  goToRegistration = () => {
      Actions.register()
   }
  
   if (!loadAssetsAsync) {
    return <AppLoading/>;
  } else {
      return (
        <ScrollView style={styles.body}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.container}>
        <TouchableOpacity  onPress={goToRegistration}>
        </TouchableOpacity>
          <Text style={styles.heading}>Get Started</Text>
          <Text style={styles.subHeading}>Sign up for new account, enter your email and get started</Text>
              { showEmail ? 
                // <view>
                  <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#BDBDBD"
                    autoCapitalize = "none"
                    value={email}
                    onChangeText = {(value) => setEmail(value)}/>
                    // </view> 
                    : null
                }

                { showPassword ? 
                  // <view> 
                     <SimpleAnimation delay={200} duration={500} fade staticType='zoom'>
                        <TextInput style={styles.input}
                        underlineColorAndroid = "transparent"
                        placeholder = "Password"
                        placeholderTextColor = "#BDBDBD"
                        autoCapitalize = "none"
                        value={password}
                        onChangeText ={(value) => setPassword(value)}/>

                      </SimpleAnimation>
                        // </view>
                        : null
                  }

                <TouchableOpacity
                  onPress={onSubmit}
                >
                  <Button 
                    style={styles.submitButton}
                    loading={isloading}
                    color="#ffff"
                  ><Text style={{color:'#ffff'}}>Next</Text></Button>
                </TouchableOpacity>
                
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity  onPress = {goToRegistration}>
                <Text style={styles.login}>Log In</Text>
                </TouchableOpacity>


        </View>
        </ScrollView>
      )
    }
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

  inputP: {
    margin: 20,
    height: 50,
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
    display: passwordDisplay
 },

  input: {
    margin: 20,
    height: 50,
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
    display: emailDisplay
 },
 submitButton: {
    backgroundColor: '#2F80ED',
    padding: 10,
    margin: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.65,
    borderRadius: 4,
    color: '#ffff'
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
    opacity: 0.9,
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