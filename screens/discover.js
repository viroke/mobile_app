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

class Discover extends React.Component {
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
      Actions.session();
    };

    const goToNotification = () => {
      Actions.notification();
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
              <Text style={styles.title}>Discover</Text>
            </View>
            <View style={styles.search}>
              <Searchbar
                style={styles.searchTextField}
                iconColor="#ffff"
                placeholderTextColor="#ffff"
                placeholder="Type to search"
              />
            </View>
            <TouchableOpacity onPress={goToNotification}>
              <Image
                source={require("../assets/images/Rectangle24.png")}
                style={styles.topImage}
              />
            </TouchableOpacity>
            <View style={{ position: "absolute", top: 310, elevation: 3 }}>
              <Text style={styles.name}>
                Kristin Watson{" "}
                <Image
                  source={require("../assets/images/Vector.png")}
                  style={{ width: 10, height: 10 }}
                />
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <View>
                  <Text
                    style={{
                      width: 145,
                      height: 16,
                      left: 25,
                      fontFamily: "WorkSansMedium",
                      fontStyle: "normal",
                      fontWeight: "600",
                      fontSize: 14,
                      lineHeight: 16,
                      textAlign: "center",
                      letterSpacing: -0.8,
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    Session Title Goes here
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      width: 49,
                      height: 21,
                      left: 100,
                      fontStyle: "normal",
                      fontWeight: "bold",
                      fontSize: 18,
                      lineHeight: 21,
                      textAlign: "center",
                      letterSpacing: -0.8,
                      color: "#FFFFFF",
                    }}
                  >
                    {" "}
                    <Text>&#8358;</Text> 250
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Image
                source={require("../assets/images/Rectangle17.png")}
                style={{
                  width: 150,
                  height: 100,
                  top: 50,
                  backgroundColor: "#C4C4C4",
                  borderRadius: 3,
                  opacity: 0.65,
                }}
              />
              <View
                style={{
                  backgroundColor: "transparent",
                  width: 150,
                  top: 10,
                  height: 50,
                }}
              >
                <Paragraph
                  style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 14,
                    lineHeight: 13,
                    letterSpacing: -0.63434,
                    height: 16,
                    marginLeft: 5,
                    color: "#FFFFFF",
                    fontFamily: "WorkSansMedium",
                    marginTop: 3,
                  }}
                >
                  Jerome Bell{" "}
                  <Image
                    source={require("../assets/images/Vector.png")}
                    style={{ width: 10, height: 10 }}
                  />
                </Paragraph>
                <Text
                  style={{
                    width: 145,
                    height: 16,
                    fontFamily: "WorkSansMedium",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: 14,
                    lineHeight: 16,
                    marginLeft: 5,
                    letterSpacing: -0.8,
                    color: "#FFFFFF",
                  }}
                >
                  Session Title Goes here
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#454545",
                  padding: 5,
                  position: "absolute",
                  top: 50,
                  left: 105,
                }}
              >
                <Text style={{ color: "#ffff" }}>
                  <Text>&#8358;</Text>200
                </Text>
              </View>
            </View>

            <View style={{ position: "relative", left: 170, bottom: 100 }}>
              <TouchableOpacity>
                <Card.Cover
                  source={require("../assets/images/Rectangle18.png")}
                  style={styles.imageCardTwo}
                />
                <View
                  style={{
                    backgroundColor: "#454545",
                    padding: 5,
                    position: "absolute",
                    bottom: 0,
                    left: 105,
                  }}
                >
                  <Text style={{ color: "#ffff" }}>
                    <Text>&#8358;</Text>200
                  </Text>
                </View>
              </TouchableOpacity>
              <Card.Content>
                <Paragraph
                  style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: 14,
                    marginTop: 10,
                    letterSpacing: -0.63434,
                    marginLeft: 5,
                    color: "#FFFFFF",
                    fontFamily: "WorkSansMedium",
                    marginTop: 3,
                    opacity: 0.65,
                  }}
                >
                  Courtney Henry{" "}
                  <Image
                    source={require("../assets/images/Vector.png")}
                    style={{ width: 10, height: 10 }}
                  />
                </Paragraph>

                <Text
                  style={{
                    width: 145,
                    height: 16,
                    fontFamily: "WorkSansMedium",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: 14,
                    lineHeight: 16,
                    marginLeft: -15,
                    letterSpacing: -0.8,
                    color: "#FFFFFF",
                  }}
                >
                  Session Title Goes here
                </Text>
              </Card.Content>
            </View>

            <View
              style={{ position: "relative", left: 1, top: -240, width: 150 }}
            >
              <Card style={{ backgroundColor: "#2A2B31" }}>
                <TouchableOpacity>
                  <Card.Cover
                    source={require("../assets/images/Rectangle25.png")}
                    style={styles.imageCard}
                  />
                  <View
                    style={{
                      backgroundColor: "#454545",
                      padding: 5,
                      position: "absolute",
                      bottom: 0,
                      left: 105,
                    }}
                  >
                    <Text style={{ color: "#ffff" }}>
                      <Text>&#8358;</Text>200
                    </Text>
                  </View>
                </TouchableOpacity>
                <Card.Content>
                  <Paragraph
                    style={{
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 14,
                      lineHeight: 13,
                      letterSpacing: -0.63434,
                      marginLeft: -10,
                      color: "#FFFFFF",
                      fontFamily: "WorkSansMedium",
                      marginTop: 5,
                      opacity: 0.65,
                    }}
                  >
                    Courtney Henry{" "}
                    <Image
                      source={require("../assets/images/Vector.png")}
                      style={{ width: 10, height: 10 }}
                    />
                  </Paragraph>

                  <Text
                    style={{
                      fontWeight: "600",
                      fontSize: 14,
                      lineHeight: 16,
                      letterSpacing: -0.63434,
                      color: "#BDBDBD",
                      marginTop: 3,
                      marginLeft: -10,
                      fontSize: 14,
                      lineHeight: 16,
                      width: 145,
                      height: 16,
                    }}
                  >
                    Session Title Goes here
                  </Text>
                </Card.Content>
              </Card>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                bottom: 200,
              }}
            >
              <Grid>
                <Col style={{ marginRight: 10, borderRadius: 10, width: 150 }}>
                  <Card style={{ backgroundColor: "#2A2B31" }}>
                    <Card.Cover
                      source={require("../assets/images/discover1.png")}
                      style={styles.imageCardBottom}
                    />
                  </Card>
                </Col>

                <Col style={{ marginLeft: 5, borderRadius: 10, width: 150 }}>
                  <Card style={{ backgroundColor: "#2A2B31" }}>
                    <Card.Cover
                      source={require("../assets/images/discover2.png")}
                      style={styles.imageCardBottom}
                    />
                  </Card>
                </Col>
              </Grid>
            </View>
          </View>
        </ScrollView>
        <Navigation activeTab="home" />
      </View>
    );
  }
}

export default Discover;

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

  topImage: {
    width: 320,
    height: 280,
    top: 20,
    borderRadius: 5,
    opacity: 0.75,
  },

  search: {
    marginTop: 15,
    color: "#FFFF",
  },

  searchTextField: {
    height: 50,
    backgroundColor: "#2A2B31",
    borderRadius: 3,
    color: "#FFFF",
  },

  name: {
    height: 16,
    left: 0,
    top: 0,
    fontFamily: "WorkSansMedium",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.8,
    color: "#FFFFFF",
    marginTop: 3,
    left: 30,
    opacity: 0.75,
  },

  imageCard: {
    height: 80,
    backgroundColor: "#2A2B31",
  },

  imageCardTwo: {
    width: 150,
    height: 220,
    backgroundColor: "#C4C4C4",
    borderRadius: 3,
  },

  imageCardBottom: {
    height: 127,
    borderRadius: 4,
    backgroundColor: "#2A2B31",
    opacity: 0.7,
  },
});
