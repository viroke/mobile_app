import React, { Component, useState } from 'react'
import { View, Text, TouchableOpacity, StatusBar, TextInput, StyleSheet } from 'react-native'

export default function Inputs () {
   const [loading, setloading] = useState(false);
   const [Email, setEmail] = useState("yomikolawole@cohit.net");
   const [password, setPassword] = useState("password");

   state = {
      firstName: '',
      lastName: '',
   }
   handleEmail = (text) => {
    this.setState({ Email: text })
   }
   verify = (value) => {
      Console.log(value);
   }

   // render() {
      return (
         <View style = {styles.container}>
             <StatusBar barStyle="light-content" />
            <TextInput style={styles.input}
               underlineColorAndroid="transparent"
               placeholder="Email"
               placeholderTextColor="#BDBDBD"
               autoCapitalize="none"
               value={Email}
               onChangeText={(value) => setEmail(value)}
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.verify(Email)
               }>
               <Text style = {styles.submitButtonText}> Next </Text>
            </TouchableOpacity>
            <Text style={styles.heading}>Do you have an account</Text>
            <Text>Login</Text>
         </View>
      )
   // }
}

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
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
      // fontFamily:'typeface-work-sans',
   },
   submitButton: {
      backgroundColor: '#2F80ED',
      padding: 10,
      margin: 20,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      // fontFamily:'typeface-work-sans',
   },
   submitButtonText:{
      color: 'white', 
      borderRadius: 4,
      // fontFamily:'typeface-work-sans',

   }
})