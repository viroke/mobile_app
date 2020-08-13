import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image, ScrollView, StatusBar, TouchableOpacity, ImageBackground} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Col, Grid } from 'react-native-easy-grid';
import { SimpleLineIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, Title, Paragraph } from 'react-native-paper';
import Navigation from "../components/navigationTab";
import * as Font from 'expo-font';
import { Actions } from 'react-native-router-flux';
import { Searchbar } from 'react-native-paper';


const { width, height } = Dimensions.get("window");

class Discover extends React.Component {

    state = {
        search: '',
        fontLoaded: false,
      }

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

        const  returnBack = () => {
            Actions.session()
           }

           const  goTodiscover = () => {
            Actions.discover()
         }
            if (!this.state.fontLoaded) {
              return null; // render some progress indicator
            }
            return (
                <View style={styles.body}>
                <StatusBar barStyle="light-content" />
                 <ScrollView>
                 <View style={styles.container}>
                 <View>
                <Text style={styles.title}>Discover</Text>
                </View>
                <View style={styles.search}>
                <Searchbar
                style={styles.searchTextField}
                placeholder="Type to search"
                />
                </View>
                <Image source = {require('../assets/images/Rectangle24.png')}
                style={styles.topImage}/>
                <View style={{position:'absolute', top:295, elevation:3, }}>
                <Text style={styles.name}>
                Kristin Watson <Image source = {require('../assets/images/Vector.png')}
                style={{width:10, height:10}}/></Text>

                <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                }}
                >
                <View>
                <Text style={{
                    width: 145,
                    height: 16,
                    left: 25,
                    fontFamily: 'WorkSansMedium',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: 14,
                    lineHeight: 16,
                    textAlign: 'center',
                    letterSpacing: -0.8,
                    color: '#FFFFFF',
                }}> Session Title Goes here</Text>
                </View>

                <View>
                <Text style={{
                    width: 49,
                    height: 21,
                    left: 297,
                    top: 319,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 18,
                    lineHeight: 21,
                    textAlign: 'center',
                    letterSpacing: -0.8,
                    color: '#FFFFFF',
                }}> N 250</Text>
                </View>
                </View>
                </View>



                 </View>
                </ScrollView>
                <Navigation activeTab="home" />
                </View>
            )}

}

export default Discover

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:'#18191D',
    width:width,
    height:height,

  },

  container: {
    flex: 1,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
  },

  title: {
    fontSize: 24,
    fontFamily:'WorkSans',
    height: 28,
    left: 0,
    right: 69.87,
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: 1,
    color: '#E0E0E0',
    opacity:0.85,
  },

  topImage:{
    width: 320,
    height: 250,
    top:20,
    borderRadius: 5,
    opacity:0.75,
  },

  search:{
      marginTop:15,
  },

  searchTextField:{
    height: 50,
    backgroundColor: '#2A2B31',
    borderRadius: 3,
    color:'#FFFF'
  },

  name:{
    height: 16,
    left: 0,
    top: 0,
    fontFamily: 'WorkSansMedium',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.8,
    color: '#FFFFFF',
    marginTop: 3,
    left:30,
    opacity:.75
  }




});

