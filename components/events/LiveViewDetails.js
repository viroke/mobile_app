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
  RefreshControl,
  Animated,
} from "react-native";

import { inject, observer } from "mobx-react";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { CustomTextInput } from "../common/CustomFormElements";
import * as NativeBase from 'native-base';

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class SingleEvent extends React.Component {
  state = {
    createAccountChecked: true,
    createWalletChecked: false
  }
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
    // this.username = "vibedadi";
  }
  
  isAuthed() {
    return this.props.AuthenticationStore.isAuthed;
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor="#18191D"
        contentBackgroundColor="black"
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText} >
                <Text ellipsizeMode='tail' numberOfLines={2} >{this.event.title}</Text>
                {" @ "}<Text>&#8358;</Text>{this.event.ticketPrice}
            </Text>
          </View>
        )}
        renderBackground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <StatusBar hidden />
            <Image
                source={{ 
                    uri: this.event.eventImages[0],
                    resizeMode: 'cover',
                    width: window.width,
                    height: PARALLAX_HEADER_HEIGHT
                }}
            />
            
            
            <LinearGradient
              colors={['transparent', "#18191D"]}
              end={{ x: 0.6, y: 0.9 }}
              style={{
                justifyContent: 'flex-end',
                position: "absolute",
                elevation: 3,
                width,
                height: PARALLAX_HEADER_HEIGHT
              }}>
              <Text style={{...styles.heading, marginLeft: 20 }} ellipsizeMode='tail' numberOfLines={2} >{this.event.title}</Text>
            </LinearGradient>
          </View>
        )}
      >
        <View style={styles.body}>
            <View style={styles.container}>
              <View style={styles.detailsView}>
                
                
                <View> 
                  { 
                    !this.isAuthed() ? 
                      <CustomTextInput placeholder={'Enter your email'}/>
                    : null
                  }
                  <CustomTextInput placeholder={'Enter Username'} value={this.username} style={{ marginTop: 15 }}/>
                  <View style={{ marginTop: 10, height: this.state.createAccountChecked ? 120 : 50 }}>
                    <NativeBase.Content padder={false}>
                      <NativeBase.ListItem style={{ borderColor: 'transparent', marginLeft: 0 }}>
                        <NativeBase.CheckBox checked={this.state.createAccountChecked} color={"#A5ADBA"} onPress={() => {
                              this.setState({ createAccountChecked: !this.state.createAccountChecked });
                              if(!this.state.createAccountChecked) this.setState({ createWalletChecked: false });
                          }}/>
                        <NativeBase.Body style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                          <NativeBase.Text style={{ color: "#BDBDBD", fontSize: 14, fontFamily: 'WorkSansMedium' }}>
                            Create an account for me. 
                          </NativeBase.Text>
                          <NativeBase.Text style={{ color: "#2D9CDB", fontSize: 12, fontFamily: 'WorkSansMedium', paddingLeft: 30 }} onPress={() => console.log("More Info")}>
                                More Info
                            </NativeBase.Text>
                        </NativeBase.Body>
                      </NativeBase.ListItem>
                      { 
                        this.state.createAccountChecked ? 
                          <NativeBase.ListItem style={{ borderColor: 'transparent', marginLeft: 0, marginTop: 0 }}>
                            <NativeBase.CheckBox checked={this.state.createWalletChecked} color={"#A5ADBA"} onPress={() => {
                                  this.setState({ createWalletChecked: !this.state.createWalletChecked });
                              }}/>
                            <NativeBase.Body>
                              <NativeBase.Text style={{ color: "#BDBDBD", fontSize: 16, fontFamily: 'WorkSansMedium' }}>
                                Create a wallet for future use
                              </NativeBase.Text>
                              <NativeBase.Text style={{ color: "#2D9CDB", fontSize: 14, fontFamily: 'WorkSansMedium' }} onPress={() => console.log("Wallet nee")}>
                                Why do I need a wallet?
                              </NativeBase.Text>
                            </NativeBase.Body>
                          </NativeBase.ListItem>
                        : null
                        }
                    </NativeBase.Content>
                  </View>
                </View>

                <TouchableOpacity onPress={() => console.log("Thus")}>
                    <Button
                        mode="contained"
                        style={styles.submitButton}
                    >
                        <Text style={{ textTransform: "none", fontSize: 17, fontFamily: "WorkSansMedium", letterSpacing: 0.1 }}>Join for <Text>&#8358;</Text>{this.event.ticketPrice}</Text>
                    </Button>
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </ParallaxScrollView> 
    );
  }
}

export default SingleEvent;

const window = Dimensions.get("window");

const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 450;
const STICKY_HEADER_HEIGHT = 70;

const checkBoxStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

const styles = StyleSheet.create({
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
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
    alignItems: 'center',
    flex: 1,
    flexDirection: "column",
    height: PARALLAX_HEADER_HEIGHT
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
    marginTop: -10,
  },

  heading: {
    color: "#FFFFFF",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 24,
    letterSpacing: -0.85,
    fontFamily: "WorkSans",
    opacity: 0.85,
    marginBottom: 10
  },

  icon: {
    color: "#FFF",
    margin: 20,
    marginTop: 50,
  },

  detailsView: {
    margin: 20
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
    backgroundColor: "#4EAFFF",
    // padding: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
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
