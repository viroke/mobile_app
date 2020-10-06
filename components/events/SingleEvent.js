import React, { Component, useEffect, useState, Suspense } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  SafeAreaView,
  Animated,
} from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import * as Font from "expo-font";
// import styles from "./styles";
import { inject, observer } from "mobx-react";
import UpcomingEventsView from "../home/data-views/UpcomingView";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";
const { width, height } = Dimensions.get("window");
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { LinearGradient } from "expo-linear-gradient";

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class SingleEvent extends React.Component {
  constructor(props) {
    super(props);
    props.ApplicationStore.navigation = props.navigation;
    this.props.ApplicationStore.setClassProps(
      [
        {
          name: "UIStore",
          value: this.props.UIStore,
        },
        {
          name: "AuthenticationStore",
          value: this.props.AuthenticationStore,
        },
      ],
      this.props.ApplicationStore.injectedStores
    );

    this.event = props.route.params.data;
  }
  
  isAuthed() {
    return this.props.AuthenticationStore.isAuthed;
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor="#18191D"
        contentBackgroundColor="black"
        parallaxHeaderHeight={350}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText} >
                <Text ellipsizeMode='tail' numberOfLines={2} >{this.event.title}</Text>
                {" @ "}<Text>&#8358;</Text>{this.event.ticketPrice}
            </Text>
          </View>
        )}
        renderForeground={() => (
            <View key="parallax-fore" style={styles.parallaxHeader}>
                <TouchableOpacity style={{ position: "absolute", elevation: 3 }} onPress={this.props.navigation.goBack}>
                    <AntDesign style={styles.icon} name="arrowleft" size={24} />
                </TouchableOpacity>
            </View>
        )}
        renderBackground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <Image
                source={{ 
                    uri: this.event.eventImages[0], 
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT
                }}
                style={styles.topImage}
            />
            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                elevation: 3,
                top: 290,
                width,
                backgroundColor: "#18191D",
                paddingTop: 10
              }}
            >
              <Text style={styles.heading} ellipsizeMode='tail' numberOfLines={2} >{this.event.title}</Text>
              <View style={styles.overlay}>
                <Title style={styles.overlayText}>
                  02:45 PM{" "}
                  <Text
                    style={{
                      fontFamily: "WorkSansMedium",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 15,
                      lineHeight: 15,
                      letterSpacing: -0.8,
                      color: "#535D7E",
                    }}
                  >
                    Today
                  </Text>
                </Title>
              </View>
            </View>
          </View>
        )}
      >
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.detailsView}>
                <Text style={styles.details}>Session Details</Text>
                <Text style={styles.textDetails}>
                  A quick and exclusive 10mins session with olamide, you can sak
                  me anything and talk about anything. I’ll be all ready to
                  answer.
                </Text>
                <View>
                  <Text style={styles.price}>
                    Entry price starting at: <Text>&#8358;</Text>
                    {this.event.ticketPrice}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => console.log("Thus")}>
                    <Button
                        mode="contained"
                        style={styles.submitButton}
                    >
                        <Text style={{ textTransform: "capitalize" }}>Join.</Text>
                    </Button>
                </TouchableOpacity>
              </View>

              {/* card scroll view */}
              <UpcomingEventsView
                listTitle={"Similar Sessions"}
                listView={"FullCard"}
              />
            </View>
          </ScrollView>
        </View>
      </ParallaxScrollView> 
    );
  }
}

export default SingleEvent;

const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  stickySection: {
    // flexDirection: 'row',
    height: STICKY_HEADER_HEIGHT,
    width: 300,
    justifyContent: "flex-end",
  },
  stickySectionText: {
    color: "white",
    fontSize: 20,
    margin: 10,
    fontWeight: "600"
  },
  stickySectionTitle: {
    color: "white",
    fontSize: 20,
    margin: 5,
    fontWeight: "600"
  },
  parallaxHeader: {
    // alignItems: 'center',
    flex: 1,
    flexDirection: "column",
  },
  body: {
    flex: 1,
    backgroundColor: "#18191D",
    width: width,
    height: height,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    marginTop: 20,
  },

  topImage: {
    resizeMode: "cover",
    justifyContent: "center",
    height: 300,
    borderRadius: 5,
    backgroundColor: "transparent",
  },

  heading: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 23,
    margin: 20,
    letterSpacing: -0.85,
    fontFamily: "WorkSans",
    lineHeight: 28,
    opacity: 0.85,
    width: 247,
    height: 28,
  },

  icon: {
    color: "#FFF",
    margin: 20,
    marginTop: 50,
  },

  detailsView: {
    left: 20,
  },

  details: {
    color: "#FFF",
    width: 150,
    height: 16,
    fontFamily: "WorkSans",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.4,
    color: "#BDBDBD",
    opacity: 0.75,
  },

  textDetails: {
    color: "#FFF",
    width: width - 55,
    fontFamily: "WorkSansMedium",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    letterSpacing: -0.8,
    color: "#A9AEBE",
    opacity: 0.75,
    marginTop: 10,
    lineHeight: 15,
  },

  overlay: {
    right: 28,
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    width: 65,
    height: 50,
    elevation: 3,
  },

  overlayText: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 19,
    color: "#535D7E",
    textAlign: "center",
    marginTop: 7,
    opacity: 0.65,
    fontFamily: "WorkSansSemiBold",
    letterSpacing: -0.8,
    width: 65,
    height: 45,
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  price: {
    width: 178,
    fontFamily: "WorkSansMedium",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: -0.8,
    color: "#E0E0E0",
    marginTop: 15,
    opacity: 0.75,
  },

  submitButton: {
    backgroundColor: "#2F80ED",
    // padding: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.65,
    marginTop: 10,
    borderRadius: 4,
    width: width - 40,
  },

  join: {
    color: "#fff",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 17,
    margin: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: -0.3,
    fontFamily: "WorkSansMedium",
    elevation: 3,
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
    fontFamily: "WorkSansSemiBold",
  },
});
