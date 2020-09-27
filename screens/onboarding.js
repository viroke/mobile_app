import React, { useState, component } from "react";
import { AsyncStorage } from "react-native";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";
import { getToken } from "../store";

const boardImage = require("../assets/images/group2.png");
const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue");
const color = (isLight) => backgroundColor(!isLight);

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const halfWidth = width / 2;

import Storage from "../common/storage";

const Square = ({ isLight, selected }) => {
  let backgroundColor;
  if (isLight) {
    backgroundColor = selected ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.3)";
  } else {
    backgroundColor = selected ? "#6f8cfb" : "rgba(255, 255, 255, 0.5)";
  }
  return (
    <View
      style={{
        width: 10,
        height: 3,
        marginHorizontal: 3,
        backgroundColor: backgroundColor,
      }}
    />
  );
};

const Skip = () => {
  return <Text></Text>;
};

const Next = () => {
  const label = "NEXT";
  return (
    <Text
      style={{
        color: "#718CFB",
        fontSize: 13,
        textAlign: "center",
        padding: 20,
      }}
    >
      {label}
    </Text>
  );
};

const setState = () => useState(true);

class CutomCarousel extends React.Component {
  render() {
    const completeOnboarding = async () => {
      await AsyncStorage.setItem(
        "hasOnboarded",
        JSON.stringify({
          hasOnboarded: true,
        })
      );
      console.log({ navigation: this.props.navigation });
      this.props.navigation.navigate("Started");
    };

    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TouchableOpacity onPress={() => Actions.started()}>
          <Text style={styles.skipLabel}>Skip</Text>
        </TouchableOpacity>
        <Image style={styles.boardImage} source={boardImage} />
        <Onboarding
          onDone={completeOnboarding}
          onSkip={completeOnboarding}
          DotComponent={Square}
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          bottomBarColor="#2A2B31"
          titleStyles={{
            color: "#fff",
            fontSize: 30,
            textAlign: "center",
            paddingRight: 40,
            paddingLeft: 40,
            fontWeight: "bold",
            marginTop: 20,
          }}
          subTitleStyles={{
            fontSize: 14,
            textAlign: "center",
            paddingRight: 40,
            paddingLeft: 40,
          }}
          pages={[
            {
              backgroundColor: "#2A2B31",
              title: "Spend premium time with your favorite people",
              subtitle: "Connect and live moments with your favorite people.",
              image: <Image source={null} />,
            },
            {
              backgroundColor: "#2A2B31",
              title: "1:1 video calls with your favorite celebrity",
              subtitle:
                "Have an exclusive personal time for up to 10 min with your favorites for as low as N100",
              image: <Image source={null} />,
            },
            {
              backgroundColor: "#2A2B31",
              title: "Unlimited treasure hunts.",
              subtitle:
                "Have access to unlimited benefit hidden at different places in the app.",
              image: <Image source={null} />,
            },
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
    backgroundColor: "#2A2B31",
    paddingBottom: 40,
    fontFamily: "WorkSansMedium",
  },
  skipLabel: {
    textAlign: "right",
    color: "#A4A4BD",
    padding: 40,
    fontSize: 20,
  },
  boardImage: {
    position: "absolute",
    left: width - 280,
    top: height - 530,
    width: 212,
    height: 205,
    // elevation:3,
    zIndex: 3,
  },
});
