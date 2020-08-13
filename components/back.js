import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default class IconExample extends React.Component {
    render() {
      return (
        <AntDesign style={styles.icon} name="arrowleft" size={24}/>
      );
    }
  }

  const styles = StyleSheet.create({
    icon:{
        color:'#2F80ED',
        size:24,
        marginLeft:10,
        marginTop:20,
      }
  });