import React, {useState, component} from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { Actions } from 'react-native-router-flux';
import * as Font from 'expo-font';

const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
const color = isLight => backgroundColor(!isLight);

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const halfWidth = width/2;

const Square = ({ isLight, selected }) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';
    } else {
      backgroundColor = selected ? '#6f8cfb' : 'rgba(255, 255, 255, 0.5)';
    }
    return (
      <View
        style={{
          width: 10,
          height: 3,
          marginHorizontal: 3,
          backgroundColor: backgroundColor
        }}
      />
    );
  };

  const Skip = () => {
      return (
        <Text></Text>
      );
  }

  const Next = () => {
    const label = "Next";
    return (
    <Text style={{
      color: "#718CFB",
      fontSize: 13,
      textAlign: 'center',
          padding: 20,
          }} >{label}</Text>
    );
  };

const setState = () => useState(true);

class CutomCarousel extends React.Component {
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
    var getPageIndex = (pageIndex) => {
        setState({
            pageIndex,
        });
    };
   const  goToStarted = () => {
      Actions.started()
   }

 if (!this.state.fontLoaded) {
    return null; // render some progress indicator
  }
 return  (
   <View style={styles.container}>
    <StatusBar hidden/>
    <TouchableOpacity  onPress={() => Actions.started()}>
    <Text style={styles.skipLabel} >Skip</Text>
    </TouchableOpacity>
      <Image style={styles.boardImage} source={require('../assets/images/group2.png')} />
        <Onboarding
        DotComponent={Square}
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        bottomBarColor='#2A2B31'
        titleStyles={{
          color: "#fff",
          fontSize: 30,
          textAlign: 'center',
          paddingRight: 40,
          paddingLeft: 40,
          fontWeight: 'bold',
          marginTop: -100
          }}
        subTitleStyles={{
            fontSize: 14,
            textAlign: 'center',
            paddingRight: 40,
          paddingLeft: 40
        }}
        pages={[
          {
            backgroundColor: '#2A2B31',
            title:'Private sessions with your favorite human',
            subtitle: 'Have an exclusive personal time for up to 10 min with your favorites for as low as N100',
          },
          {
            backgroundColor: '#2A2B31',
            title:'Private sessions with your favorite human',
            subtitle: 'Have an exclusive personal time for up to 10 min with your favorites for as low as N100',
          },
          {
            backgroundColor: '#2A2B31',
            title:'Private sessions with your favorite human',
            subtitle: 'Have an exclusive personal time for up to 10 min with your favorites for as low as N100',
          }
        ]}
      />
  </View>
);
}
}

export default CutomCarousel;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: '#2A2B31',
    paddingBottom: 40,
    fontFamily:'WorkSansMedium',
  },
  skipLabel: {
    textAlign: 'right',
    color: '#A4A4BD',
    padding: 40,
    fontSize: 20
  },
  boardImage: {
    position: 'absolute',
    top: 150,
    left: 90,
    width:186,
    height:180,
    elevation:3,
  }
});
