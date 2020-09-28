import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Col, Grid } from "react-native-easy-grid";
import { SimpleLineIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Card, Title, Paragraph } from "react-native-paper";
import Navigation from "../components/navigationTab";
import * as Font from "expo-font";
import { Actions } from "react-native-router-flux";
import { Searchbar } from "react-native-paper";

const { width, height } = Dimensions.get("window");

class Notification extends React.Component {
  state = {
    search: "",
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
    const returnBack = () => {
      Actions.discover();
    };

    const Wallet = () => {
      Actions.wallet();
    };
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      <View style={styles.body}>
        <StatusBar barStyle="light-content" />
        <ScrollView>
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Notifications</Text>
            </View>

            <View>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 12,
                  color: "#BDBDBD",
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: "WorkSansMedium",
                  lineHeight: 14,
                  letterSpacing: -0.45,
                  opacity: 0.8,
                }}
              >
                Today
              </Text>
            </View>

            <TouchableOpacity onPress={Wallet}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 10,
                  height: 50,
                  marginBottom: 10,
                  backgroundColor: "#2A2B31",
                  borderRadius: 3,
                }}
              >
                <View style={{ marginRight: 3 }}>
                  <Image
                    source={require("../assets/images/Ellipse5.png")}
                    style={styles.image}
                  />
                </View>

                <View style={{ marginRight: 3 }}>
                  <Text style={styles.post}>
                    Joeboy just posted a new session
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                height: 50,
                backgroundColor: "#2A2B31",
                marginBottom: 10,
                borderRadius: 3,
              }}
            >
              <View style={{ marginRight: 3 }}>
                <Image
                  source={require("../assets/images/Ellipse6.png")}
                  style={styles.image}
                />
              </View>

              <View style={{ marginRight: 3 }}>
                <Text style={styles.post}>
                  Joeboy just posted a new session
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                height: 50,
                backgroundColor: "#2A2B31",
                marginBottom: 10,
                borderRadius: 3,
              }}
            >
              <View style={{ marginRight: 3 }}>
                <SimpleLineIcons
                  name="wallet"
                  size={24}
                  color="#24DEBE"
                  style={{ transform: [{ rotateY: "180deg" }], opacity: 0.65 }}
                />
              </View>

              <View style={{ marginRight: 3 }}>
                <Text style={styles.post}>
                  Joeboy just posted a new session
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 12,
                  color: "#BDBDBD",
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: "WorkSansMedium",
                  lineHeight: 14,
                  letterSpacing: -0.45,
                  opacity: 0.8,
                }}
              >
                Yesterday
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                height: 50,
                marginBottom: 10,
                backgroundColor: "#2A2B31",
                borderRadius: 3,
              }}
            >
              <View style={{ marginRight: 3 }}>
                <Image
                  source={require("../assets/images/Ellipse7.png")}
                  style={styles.image}
                />
              </View>

              <View style={{ marginRight: 3 }}>
                <Text style={styles.post}>
                  Joeboy just posted a new session
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                height: 50,
                backgroundColor: "#2A2B31",
                marginBottom: 10,
                borderRadius: 3,
              }}
            >
              <View style={{ marginRight: 3 }}>
                <Image
                  source={require("../assets/images/Ellipse8.png")}
                  style={styles.image}
                />
              </View>

              <View style={{ marginRight: 3 }}>
                <Text style={styles.post}>
                  Joeboy just posted a new session
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                height: 50,
                backgroundColor: "#2A2B31",
                marginBottom: 10,
                borderRadius: 3,
              }}
            >
              <View style={{ marginRight: 3 }}>
                <SimpleLineIcons
                  name="wallet"
                  size={24}
                  color="#24DEBE"
                  style={{ transform: [{ rotateY: "180deg" }], opacity: 0.65 }}
                />
              </View>

              <View style={{ marginRight: 3 }}>
                <Text style={styles.post}>
                  Joeboy just posted a new session
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <Navigation activeTab="home" />
      </View>
    );
  }
}

export default Notification;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#18191D",
    width: width,
    height: height,
  },

  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  title: {
    fontSize: 24,
    fontFamily: "WorkSans",
    height: 28,
    left: 0,
    right: 69.87,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 1,
    color: "#E0E0E0",
    opacity: 0.85,
  },

  image: {
    width: 30,
    height: 30,
    opacity: 0.75,
  },

  post: {
    width: 203,
    fontFamily: "WorkSansMedium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    left: -15,
    letterSpacing: -0.4531,
    color: "#E0E0E0",
    opacity: 0.7,
  },
});
