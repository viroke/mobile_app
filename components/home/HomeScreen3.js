import React, { Component, useEffect, useState, Suspense } from "react";
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
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import Navigation from "../navigationTab";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { GET_EVENTS } from "../../api/subscribe";
import Constants from "expo-constants";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

export default App = () => {
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [events, setEvents] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const load = async () => {
    try {
      loadUpcomingEvent();
    } catch (err) {
      console.log(err);
    }
  };

  const wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  const goToWallet = () => {
    return {};
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    load();
  }, []);

  const goToSession = () => {
    Actions.session();
  };

  const loadUpcomingEvent = () => {
    const CALLBACK = (response, data) => {
      setIsloading(false);

      if (response.length > 0) {
        setEvents(response);
      } else {
        ToastAndroid.show("An error occured!", ToastAndroid.SHORT);
      }
    };

    const onError = (err) => {
      setIsloading(false);
      setError("Server Error");
    };

    GET_EVENTS(CALLBACK, onError);
  };

  return (
    <View style={styles.body}>
      <StatusBar barStyle="light-content" style={styles.status} />

      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={styles.title}> Home</Text>
          </View>

          <View>
            <TouchableOpacity onPress={goToWallet}>
              <SimpleLineIcons
                name="wallet"
                size={30}
                color="white"
                style={{ transform: [{ rotateY: "180deg" }], opacity: 0.65 }}
              />
            </TouchableOpacity>
            <Text style={styles.iconLabel}>Wallet</Text>
          </View>
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 12,
                color: "#A9AEBE",
                marginLeft: 7,
                marginBottom: 10,
                marginTop: 20,
                fontFamily: "WorkSansMedium",
                lineHeight: 14,
                letterSpacing: -0.45,
                opacity: 0.85,
              }}
            >
              {" "}
              Upcoming
            </Text>
          </View>

          <ScrollView
            style={{ flexDirection: "row", padding: 10, paddingTop: 0 }}
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ marginRight: 3 }}>
                <Card.Cover
                  source={require("../../assets/images/Rectangle5.png")}
                  style={styles.image}
                />
                <Text style={styles.text}>Exclusive 1:1 Chat with Jarome</Text>
              </View>

              <View style={{ marginRight: 3 }}>
                <Card.Cover
                  source={require("../../assets/images/Rectangle6.png")}
                  style={styles.image}
                />
                <Text style={styles.text}>Figchat with John</Text>
              </View>

              <View style={{ marginRight: 3 }}>
                <Card.Cover
                  source={require("../../assets/images/Rectangle5.png")}
                  style={styles.image}
                />
                <Text style={styles.text}>Exclusive 1:1 Chat with Jarome</Text>
              </View>
            </View>
          </ScrollView>

          <View>
            <TouchableOpacity onPress={() => Actions.profile()}>
              <Text
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 12,
                  color: "#A9AEBE",
                  marginTop: 20,
                  height: 14,
                  fontFamily: "WorkSansMedium",
                  lineHeight: 14,
                  marginLeft: 7,
                  letterSpacing: -0.8,
                }}
              >
                {" "}
                PEOPLE YOU FOLLOW
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{ flexDirection: "row", padding: 10 }}
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.sliderImagecol}>
              <TouchableOpacity onPress={() => Actions.profile()}>
                <Image
                  source={require("../../assets/images/Mask.png")}
                  style={styles.sliderImage}
                />
                <Text style={styles.textImage}>Jerome Bell</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sliderImagecol}>
              <TouchableOpacity onPress={() => Actions.profile()}>
                <Image
                  source={require("../../assets/images/Mask2.png")}
                  style={styles.sliderImage}
                />
                <Text style={styles.textImage}>Ralph Edwards</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sliderImagecol}>
              <TouchableOpacity onPress={() => Actions.profile()}>
                <Image
                  source={require("../../assets/images/Mask3.png")}
                  style={styles.sliderImage}
                />
                <Text style={styles.textImage}>Jenny Wilson</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sliderImagecol}>
              <TouchableOpacity onPress={() => Actions.profile()}>
                <Image
                  source={require("../../assets/images/Mask4.png")}
                  style={styles.sliderImage}
                />
                <Text style={styles.textImage}>Albert Flores</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sliderImagecol}>
              <TouchableOpacity onPress={() => Actions.profile()}>
                <Image
                  source={require("../../assets/images/Mask4.png")}
                  style={styles.sliderImage}
                />
                <Text style={styles.textImage}>Albert Flores</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.sliderImagecol}>
              <TouchableOpacity onPress={() => Actions.profile()}>
                <Image
                  source={require("../../assets/images/Mask4.png")}
                  style={styles.sliderImage}
                />
                <Text style={styles.textImage}>Albert Flores</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Upcoming session  */}

          <View>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 12,
                color: "#A9AEBE",
                marginLeft: 11,
                marginBottom: 10,
                marginTop: 20,
                fontFamily: "WorkSansMedium",
                lineHeight: 14,
                letterSpacing: -0.45,
                opacity: 0.8,
              }}
            >
              {" "}
              Upcoming
            </Text>
          </View>

          <ScrollView
            style={{ flexDirection: "row", padding: 10 }}
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Grid>
                {events != null
                  ? events.map((item) => {
                      {
                        return (
                          <Col
                            style={{
                              marginLeft: 5,
                              borderRadius: 10,
                              width: 200,
                            }}
                          >
                            <Card style={{ backgroundColor: "#2A2B31" }}>
                              <TouchableOpacity onPress={goToSession}>
                                <Card.Cover
                                  source={{ uri: item.eventImages[0] }}
                                  style={styles.imageCard}
                                />
                              </TouchableOpacity>
                              <Card.Content>
                                <Title style={styles.cardTitle}>
                                  {item.title}
                                </Title>
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
                                        source={require("../../assets/images/Vector.png")}
                                        style={{ width: 10, height: 10 }}
                                      />
                                    </Paragraph>
                                  </Col>
                                </Grid>

                                <View>
                                  <Title style={styles.cardPrice}>
                                    Entry Fee: <Text>&#8358;</Text>{" "}
                                    {item.ticketPrice}
                                  </Title>
                                </View>

                                <Grid style={{ marginLeft: -8 }}>
                                  <Col
                                    style={{
                                      marginRight: 10,
                                      borderRadius: 10,
                                    }}
                                  >
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
                                  <Col
                                    style={{ marginLeft: 10, borderRadius: 10 }}
                                  >
                                    <View style={styles.buttonContainer}>
                                      <TouchableOpacity
                                        style={{
                                          height: 28,
                                          width: 28,
                                          alignItems: "center",
                                          backgroundColor:
                                            "rgba(47, 128, 237, 0.1)",
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
                                12:30 PM Today
                              </Title>
                            </View>
                          </Col>
                        );
                      }
                    })
                  : []}
              </Grid>
            </View>
          </ScrollView>

          {/* End Upcoming */}

          <View>
            <Text
              style={{
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: 12,
                color: "#A9AEBE",
                marginLeft: 11,
                marginBottom: 10,
                marginTop: 20,
                fontFamily: "WorkSansMedium",
                lineHeight: 14,
                letterSpacing: -0.45,
                opacity: 0.8,
              }}
            >
              {" "}
              Your Favourites
            </Text>
          </View>

          {/* Your favourite */}
          <View>
            <ScrollView
              style={{ flexDirection: "row", padding: 10, marginBottom: 100 }}
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
                      <TouchableOpacity onPress={goToSession}>
                        <Card.Cover
                          source={require("../../assets/images/card3.png")}
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
                                source={require("../../assets/images/Vector.png")}
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
                        12:30 PM Today
                      </Title>
                    </View>
                  </Col>

                  <Col style={{ marginLeft: 5, borderRadius: 10, width: 200 }}>
                    <Card style={{ backgroundColor: "#2A2B31" }}>
                      <Card.Cover
                        source={require("../../assets/images/card4.png")}
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
                                source={require("../../assets/images/Vector.png")}
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
                        source={require("../../assets/images/card2.png")}
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
                                source={require("../../assets/images/Vector.png")}
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
      </View>

      <Navigation activeTab="home" />
    </View>
  );
};
