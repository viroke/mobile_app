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

const { width, height } = Dimensions.get("window");

class Profile extends React.Component {
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
    const returnBack = () => {
      Actions.session();
    };
    const goTodiscover = () => {
      Actions.discover();
    };
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      <View style={styles.body}>
        <ScrollView>
          <StatusBar barStyle="light-content" />
          <Image
            source={require("../assets/images/Rectangle11.png")}
            style={styles.topImage}
          />
          <TouchableOpacity
            style={{ position: "absolute", left: 10, elevation: 3 }}
            onPress={returnBack}
          >
            <AntDesign style={styles.icon} name="arrowleft" size={24} />
          </TouchableOpacity>
          <View></View>
          <View
            style={{
              position: "absolute",
              left: 10,
              elevation: 3,
              top: 185,
              width: 300,
              height: 28,
            }}
          >
            <Paragraph style={styles.heading}>Leslie Alexander</Paragraph>
            <Image
              source={require("../assets/images/Vector.png")}
              style={{
                width: 25,
                height: 25,
                position: "absolute",
                right: -10,
                top: 20,
              }}
            />
          </View>
          <View style={{ position: "absolute", left: 10, elevation: 3 }}>
            <Text style={styles.details}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint dolor fit manase butaric alomina minta subamino...
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              position: "absolute",
              top: 300,
            }}
          >
            <View style={{ marginRight: 2 }}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={goTodiscover}
                >
                  <Text
                    style={{
                      textTransform: "capitalize",
                      color: "#FFF",
                      letterSpacing: -0.237877,
                      marginTop: -5,
                    }}
                  >
                    {" "}
                    Subscribe{" "}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginRight: 10 }}>
              <Image
                source={require("../assets/images/spotify.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  borderRadius: 4,
                  opacity: 0.95,
                }}
              />
            </View>

            <View style={{ marginRight: 10 }}>
              <Image
                source={require("../assets/images/music.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  borderRadius: 4,
                  opacity: 0.85,
                }}
              />
            </View>

            <View style={{ marginRight: 3 }}>
              <Image
                source={require("../assets/images/video.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  borderRadius: 4,
                  opacity: 0.85,
                }}
              />
            </View>

            <TouchableOpacity>
              <View style={{ marginLeft: 30, top: 20 }}>
                <Image
                  source={require("../assets/images/life.png")}
                  style={{ width: 25, height: 22, opacity: 0.85 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ position: "relative", top: -80, elevation: 3 }}>
            <View>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 14,
                  color: "#A9AEBE",
                  marginLeft: 14,
                  marginBottom: 10,
                  marginTop: 20,
                  fontFamily: "WorkSansMedium",
                  lineHeight: 14,
                  letterSpacing: -0.45,
                  opacity: 0.8,
                }}
              >
                {" "}
                Sessions By Olamide
              </Text>
            </View>

            {/* card scroll view */}

            <ScrollView
              style={{ flexDirection: "row", padding: 10 }}
              scrollEventThrottle={16}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Grid>
                  <Col style={{ marginLeft: 5, borderRadius: 10, width: 200 }}>
                    <Card style={{ backgroundColor: "#2A2B31" }}>
                      <TouchableOpacity>
                        <Card.Cover
                          source={require("../assets/images/profile-card.png")}
                          style={styles.imageCard}
                        />
                      </TouchableOpacity>
                      <Card.Content>
                        <Title style={styles.cardTitle}>Career Talk Expo</Title>
                        <Grid>
                          <Col>
                            <Paragraph
                              style={{
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: 11,
                                lineHeight: 13,
                                letterSpacing: -0.63434,
                                color: "#BDBDBD",
                                marginTop: 3,
                                opacity: 0.65,
                              }}
                            >
                              Robert Fox{" "}
                              <Image
                                source={require("../assets/images/Vector.png")}
                                style={{ width: 10, height: 10 }}
                              />
                            </Paragraph>
                          </Col>
                        </Grid>

                        <View>
                          <Title style={styles.cardPrice}>
                            Entry Fee: <Text>&#8358;</Text> 200
                          </Title>
                        </View>

                        <Grid style={{ marginLeft: -8 }}>
                          <Col style={{ marginRight: 10, borderRadius: 10 }}>
                            <View style={styles.buttonContainer}>
                              <TouchableOpacity
                                style={{
                                  height: 28,
                                  width: 28,
                                  alignItems: "center",
                                  backgroundColor: "#2F80ED",
                                  padding: 10,
                                  borderRadius: 4,
                                  width: 70,
                                  marginTop: 10,
                                  opacity: 0.6,
                                }}
                                onPress={goTodiscover}
                              >
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    letterSpacing: -0.237877,
                                    marginTop: -5,
                                  }}
                                >
                                  {" "}
                                  Join{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Col>
                          <Col style={{ marginLeft: 10, borderRadius: 10 }}>
                            <View style={styles.buttonContainer}>
                              <TouchableOpacity
                                style={{
                                  height: 28,
                                  width: 28,
                                  alignItems: "center",
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  padding: 10,
                                  borderRadius: 4,
                                  width: 70,
                                  marginTop: 10,
                                  opacity: 0.7,
                                }}
                              >
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#7EB5FF",
                                    letterSpacing: -0.237877,
                                    marginTop: -5,
                                  }}
                                >
                                  {" "}
                                  Details{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Col>
                        </Grid>
                      </Card.Content>
                    </Card>

                    <View style={styles.cardOverlay}>
                      <Title style={styles.cardOverlayText}>
                        12:00 PM Today
                      </Title>
                    </View>
                  </Col>

                  <Col style={{ marginLeft: 5, borderRadius: 10, width: 200 }}>
                    <Card style={{ backgroundColor: "#2A2B31" }}>
                      <Card.Cover
                        source={require("../assets/images/profile-card2.png")}
                        style={styles.imageCard}
                      />
                      <Card.Content>
                        <Title style={styles.cardTitle}>Career Talk Expo</Title>
                        <Grid style={{ marginLeft: -8 }}>
                          <Col>
                            <Paragraph
                              style={{
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: 11,
                                lineHeight: 13,
                                letterSpacing: -0.63434,
                                color: "#BDBDBD",
                                marginTop: 3,
                                marginLeft: 8,
                                opacity: 0.65,
                              }}
                            >
                              Robert Fox{" "}
                              <Image
                                source={require("../assets/images/Vector.png")}
                                style={{ width: 10, height: 10 }}
                              />
                            </Paragraph>
                          </Col>
                        </Grid>

                        <View>
                          <Title style={styles.cardPrice}>
                            Entry Fee: <Text>&#8358;</Text> 200
                          </Title>
                        </View>

                        <Grid style={{ marginLeft: -8 }}>
                          <Col style={{ marginRight: 10, borderRadius: 10 }}>
                            <View style={styles.buttonContainer}>
                              <TouchableOpacity
                                style={{
                                  height: 28,
                                  width: 28,
                                  alignItems: "center",
                                  backgroundColor: "#98A2B3",
                                  padding: 10,
                                  borderRadius: 4,
                                  width: 70,
                                  marginTop: 10,
                                  opacity: 0.6,
                                }}
                              >
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    letterSpacing: -0.237877,
                                    marginTop: -5,
                                  }}
                                >
                                  {" "}
                                  Join{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Col>
                          <Col style={{ marginLeft: 10, borderRadius: 10 }}>
                            <View style={styles.buttonContainer}>
                              <TouchableOpacity
                                style={{
                                  height: 28,
                                  width: 28,
                                  alignItems: "center",
                                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                                  padding: 10,
                                  borderRadius: 4,
                                  width: 70,
                                  marginTop: 10,
                                  opacity: 0.7,
                                }}
                              >
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#7EB5FF",
                                    letterSpacing: -0.237877,
                                    marginTop: -5,
                                  }}
                                >
                                  {" "}
                                  Details{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Col>
                        </Grid>
                      </Card.Content>
                    </Card>
                    <View style={styles.cardOverlay}>
                      <Title style={styles.cardOverlayText}>
                        12:00 PM Today
                      </Title>
                    </View>
                  </Col>

                  <Col style={{ marginLeft: 5, borderRadius: 10, width: 200 }}>
                    <Card style={{ backgroundColor: "#2A2B31" }}>
                      <Card.Cover
                        source={require("../assets/images/card2.png")}
                        style={styles.imageCard}
                      />
                      <Card.Content>
                        <Title style={styles.cardTitle}>Career Talk Expo</Title>
                        <Grid style={{ marginLeft: -8 }}>
                          <Col>
                            <Paragraph
                              style={{
                                fontStyle: "normal",
                                fontWeight: "600",
                                fontSize: 11,
                                lineHeight: 13,
                                letterSpacing: -0.63434,
                                color: "#BDBDBD",
                                marginTop: 3,
                                marginLeft: 8,
                                opacity: 0.65,
                              }}
                            >
                              Robert Fox{" "}
                              <Image
                                source={require("../assets/images/Vector.png")}
                                style={{ width: 10, height: 10 }}
                              />
                            </Paragraph>
                          </Col>
                        </Grid>

                        <View>
                          <Title style={styles.cardPrice}>
                            Entry Fee: <Text>&#8358;</Text> 200
                          </Title>
                        </View>

                        <Grid style={{ marginLeft: -8 }}>
                          <Col style={{ marginRight: 10, borderRadius: 10 }}>
                            <View style={styles.buttonContainer}>
                              <TouchableOpacity style={styles.button}>
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    letterSpacing: -0.237877,
                                    marginTop: -5,
                                  }}
                                >
                                  {" "}
                                  Join{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Col>
                          <Col style={{ marginLeft: 10, borderRadius: 10 }}>
                            <View style={styles.buttonContainer}>
                              <TouchableOpacity style={styles.button}>
                                <Text
                                  style={{
                                    textTransform: "capitalize",
                                    color: "#fff",
                                    letterSpacing: -0.237877,
                                    marginTop: -5,
                                  }}
                                >
                                  {" "}
                                  Details{" "}
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </Col>
                        </Grid>
                      </Card.Content>
                    </Card>
                    <View style={styles.cardOverlay}>
                      <Title style={styles.cardOverlayText}>
                        12:00 PM <Text>Today</Text>
                      </Title>
                    </View>
                  </Col>
                </Grid>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
        <Navigation activeTab="home" />
      </View>
    );
  }
}

export default Profile;

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
    marginLeft: 10,
    marginRight: 15,
  },

  topImage: {
    width: 375,
    height: 445,
    borderRadius: 5,
    opacity: 0.75,
  },

  heading: {
    fontFamily: "WorkSansMedium",
    width: 280,
    height: 42,
    left: 0,
    top: 0,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 36,
    lineHeight: 42,
    letterSpacing: -0.8,
    color: "#FFFFFF",
    alignSelf: "center",
    marginTop: 6,
    marginBottom: 6,
  },

  icon: {
    color: "#FFF",
    margin: 20,
    marginLeft: 10,
    marginTop: 50,
  },

  details: {
    fontFamily: "WorkSansMedium",
    fontStyle: "normal",
    top: 250,
    width: 271,
    height: 100,
    left: 10,
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 15,
    color: "rgba(255, 255, 255, 0.8)",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  submitButton: {
    backgroundColor: "#2F80ED",
    padding: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.65,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 4,
    paddingHorizontal: 20,
  },

  imageCard: {
    height: 100,
    borderRadius: 4,
    backgroundColor: "#2A2B31",
    opacity: 0.7,
  },

  imageCardBottom: {
    height: 100,
    borderRadius: 4,
    backgroundColor: "#2A2B31",
    opacity: 0.7,
    marginBottom: 5,
  },

  cardTitle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.63434,
    color: "#F2F2F2",
    marginTop: 10,
    fontFamily: "WorkSansSemiBold",
    opacity: 0.8,
  },

  cardName: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: -0.63434,
    color: "#BDBDBD",
    marginTop: 3,
    marginLeft: 8,
    opacity: 0.7,
  },

  cardPrice: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 9.5151,
    lineHeight: 11,
    letterSpacing: -0.63434,
    color: "#BDBDBD",
    marginTop: 10,
    opacity: 0.7,
  },

  cardButtonText: {
    color: "#fff",
  },

  button: {
    height: 28,
    width: 28,
    alignItems: "center",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 4,
    width: 70,
    marginTop: 10,
    opacity: 0.6,
    // Notice this updates the default style
  },

  cardOverlay: {
    position: "absolute",
    top: 70,
    right: 5,
    backgroundColor: "#454545",
    borderRadius: 4,
    width: 60,
    height: 45,
    elevation: 3,
  },

  cardOverlayText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 9,
    lineHeight: 15,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 7,
    opacity: 0.65,
  },
});
