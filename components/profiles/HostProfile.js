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
import Navigation from "../../components/navigationTab";
import * as Font from "expo-font";
import { Actions } from "react-native-router-flux";

const { width, height } = Dimensions.get("window");

import ParallaxScrollView from "react-native-parallax-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import UpcomingEventsView from "../home/data-views/UpcomingView";
import { inject, observer } from "mobx-react";
import ButtomNavigationTab from "../app/ButtomNavigationTab";
import { useIsFocused } from '@react-navigation/native'; 

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class HostProfile extends React.Component {
  
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

    this.person = props.route.params.person;
  }

  render() {
    return (
        <ParallaxScrollView
            backgroundColor="#18191D"
            contentBackgroundColor="#18191D"
            parallaxHeaderHeight={350}
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            renderStickyHeader={() => (
                <View key="sticky-header" style={styles.stickySection}>
                    <Text style={styles.stickySectionText} >
                        <Text ellipsizeMode='tail' numberOfLines={2} >{this.person.fullName}</Text>
                    </Text>
                    <Image
                        source={require("../../assets/images/Vector.png")}
                        style={{
                            width: 18,
                            height: 18,
                            top: 23
                        }}
                    />
                </View>
            )}
            renderForeground={() => (
                <View>
                    <View key="parallax-fore" style={styles.parallaxHeader}>
                        <TouchableOpacity style={{ position: "absolute", elevation: 3, top: -25, width: 300, height: 300 }} onPress={this.props.navigation.goBack}>
                            <AntDesign style={styles.icon} name="arrowleft" size={24} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                                position: "absolute",
                                left: 10,
                                elevation: 3,
                                top: 280,
                                width: 300,
                                height: 28,
                            }}>
                            <View style={{
                                    flexDirection: 'row'
                                }}>
                                <Text style={styles.heading}>{this.person.fullName}</Text>
                                <Image
                                    source={require("../../assets/images/Vector.png")}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        top: 15
                                    }}
                                />
                            </View>
                        </View>
                </View>
            )}
            renderBackground={() => (
                <View>
                    <View key="parallax-bg">
                        <Image
                            source={{ 
                                uri: this.person.profileImage, 
                                width: window.width,
                                height: PARALLAX_HEADER_HEIGHT,
                                resizeMode: "cover",
                            }}
                            style={styles.topImage}
                        />
                    </View>
                    
                </View>
            )}
        >
        <View style={styles.body}>
            <View style={{ position: "absolute", left: 1, elevation: 3, top: -190 }}>
                <Text style={styles.details}>
                    Subscribe to get {this.person.fullName}'s updates.
                </Text>
            </View>
            <View style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    position: "absolute",
                    left: 0,
                    marginLeft: 0 
                }}>
                <TouchableOpacity
                  style={styles.submitButton}
                >
                  <Text
                    style={{
                      textTransform: "capitalize",
                      color: "#FFF",
                      fontWeight: "bold"
                    }}
                  >
                    Subscribe
                  </Text>
                </TouchableOpacity>

              <Image
                source={require("../../assets/images/spotify.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  borderRadius: 4,
                  marginLeft: 10
                }}
              />

              <Image
                source={require("../../assets/images/music.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  borderRadius: 4,
                  marginLeft: 10
                }}
              />

              <Image
                source={require("../../assets/images/video.png")}
                style={{
                  width: 40,
                  height: 40,
                  top: 10,
                  borderRadius: 4,
                  marginLeft: 10
                }}
              />
          </View>
            <View style={{ marginLeft: 30, top: 20, left: width - 70 }}>
            <TouchableOpacity>
                <Image
                    source={require("../../assets/images/life.png")}
                    style={{ width: 25, height: 22, opacity: 0.85 }}
                />
            </TouchableOpacity>
            </View>
          <View style={{ top: 80 }}>
                <UpcomingEventsView
                    listTitle={`Upcoming`}
                    listView={"FullCard"}
                />
          </View>
        </View>
        </ParallaxScrollView>
    );
  }
}

export default HostProfile;


const window = Dimensions.get("window");

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
  stickySection: {
    flexDirection: 'row',
    height: STICKY_HEADER_HEIGHT,
    width: 250,
  },
  stickySectionText: {
    color: "white",
    fontSize: 20,
    margin: 10,
    fontWeight: "600",
    top: 8
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
    height: height - 100,
  },

  container: {
    flex: 1,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 15,
  },

  topImage: {
    borderRadius: 5,
    opacity: 0.75,
  },

  heading: {
    fontFamily: "WorkSansMedium",
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
    marginRight: 8,
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
    fontSize: 10,
    lineHeight: 15,
    color: "rgba(255, 255, 255, 0.8)",
    color: "white"
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
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    // opacity: 0.65,
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
