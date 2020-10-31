import React, { Component, useEffect, useState, Suspense } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Button, Icon } from 'react-native-paper';
import { inject, observer } from "mobx-react";
import { BlurView } from 'expo-blur';
import { CustomTextInputWithIcon } from "../common/CustomFormElements";

const { width, height } = Dimensions.get("window");
const image = require("../../assets/images/live-end-bg-3.jpg")
import MountainBlur from "../../assets/mocks/SessionEnd-blur.png"

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class LiveEndedScreen extends React.Component {

  state = {
      hasAccountCreated: false
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

    this.stores = {
      ApplicationStore: props.ApplicationStore,
      AuthenticationStore: props.AuthenticationStore,
      UIStore: props.UIStore,
    };
  }

  isAuthed() {
    return this.props.AuthenticationStore.isAuthed;
  }


  render() {
    return (
        <View style={styles.container}>
            <Image source={Platform.OS === "ios" ? image : MountainBlur } />
            <BlurView tint={'dark'} intensity={100} style={{position: 'absolute', height: "100%", width: '100%'}}>
                <View style={{ width, height, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.headText}>The session has ended</Text>
                    
                    { this.state.hasAccountCreated ?
                        <View>
                            <Text style={{ color: "#BDBDBD", fontFamily: 'WorkSansMedium', fontSize: 16, margin: 20 }}>Create a password for your account</Text>
                            <CustomTextInputWithIcon 
                                placeholder={'Enter Password'} 
                                value={this.username} 
                                secureTextEntry={true} 
                                icon={{
                                    color: '#BDBDBD',
                                    size: 18
                                }}
                                onChangeText={() => {}}
                            />
                            <Button 
                                mode="contained"
                                icon="lock"
                                onPress={() => navigation.navigate('StartLive')}
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "#2F80ED",
                                    height: 40,
                                    justifyContent: 'center',
                                }}>
                                <Text style={{textTransform: "capitalize", textAlign: 'center'}}>{"Save Password"}</Text>
                            </Button>
                        </View>
                    : 
                        <View>
                            <Text style={{ color: "#BDBDBD", fontFamily: 'WorkSansMedium', fontSize: 16, margin: 20 }}>Organize your paid live session too.</Text>
                            <Button 
                                mode="contained"
                                icon="cast"
                                onPress={() => this.props.navigation.navigate('StartLiveScreen')}
                                style={{
                                    marginTop: 0,
                                    backgroundColor: "#2F80ED",
                                    height: 40,
                                    justifyContent: 'center',
                                }}>
                                <Text style={{textTransform: "none", textAlign: 'center',}}>{"Set up my Live Session"}</Text>
                            </Button>
                        </View>
                    }

                    <Text 
                        style={{ fontFamily: "WorkSansMedium", fontSize: 18, textTransform: "none", color: "#2F80ED", padding: 20 }}
                        onPress={() => this.props.navigation.navigate('StartLiveScreen')}
                    >Set it up later.</Text>
                </View>
            </BlurView>
        </View>
    );
  }
}

export default LiveEndedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  headText: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'WorkSansSemiBold',
  }
});