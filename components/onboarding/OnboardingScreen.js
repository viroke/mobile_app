import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Storage from "../../common/storage";
import styles from "./styles";

const boardImage = require("../../assets/images/group2.png");
const backgroundColor = (isLight) => (isLight ? "blue" : "lightblue");
const color = (isLight) => backgroundColor(!isLight);

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

const carouselItems = [
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
      "Get an exclusive personal time for up to 10 min with your favorites for as low as N100",
    image: <Image source={null} />,
  },
  {
    backgroundColor: "#2A2B31",
    title: "Unlimited treasure hunts.",
    subtitle:
      "Get access to unlimited benefit hidden at different places in the app.",
    image: <Image source={null} />,
  },
];

class OnboardingCarousel extends Component {
  constructor(props) {
    super(props);
    this.completeOnboarding = this.completeOnboarding.bind(this);
  }

  async completeOnboarding() {
    await Storage.set("hasOnboarded", "1");
    let onboarded = await Storage.get("hasOnboarded");
    this.props.navigation.navigate("GetStarted");
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TouchableOpacity onPress={this.completeOnboarding}>
          <Text style={styles.skipLabel}>Skip</Text>
        </TouchableOpacity>
        <Image style={styles.boardImage} source={boardImage} />
        <Onboarding
          onDone={this.completeOnboarding}
          onSkip={this.completeOnboarding}
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
          pages={carouselItems}
        />
      </View>
    );
  }
}

export default OnboardingCarousel;
