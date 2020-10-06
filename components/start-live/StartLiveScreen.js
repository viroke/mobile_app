import React, { Component, useEffect, useState, Suspense } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Button } from 'react-native-paper';
import { inject, observer } from "mobx-react";
import { Camera } from 'expo-camera';
import CameraView from '../common/CameraView';

const { width, height } = Dimensions.get("window");

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class StartLiveScreen extends React.Component {

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
      <CameraView 
        blur={true}
        renderComponentOnView={(cameraProps) => {
            let [cameraPreviewMode, setCameraPreviewMode] = useState(cameraProps.hasCameraAccess ? 'enabled' : 'disabled');

            let toggleCameraPreview = async () => {
                if(!cameraProps.camera) return;
                switch (cameraPreviewMode) {
                    case 'enabled':
                            await cameraProps.camera.pausePreview();
                            setCameraPreviewMode('hang');
                        break;
                    case 'hang':
                            setCameraPreviewMode('disabled');
                        break;
                    case 'disabled':
                            setCameraPreviewMode('enabled');
                            await cameraProps.camera.resumePreview();
                        break;
                
                    default:
                        break;
                }
            }
            return (
                <View style={{...styles.body, backgroundColor: (cameraPreviewMode === 'disabled') ? '#18191D' : 'transparent' }}>
                <StatusBar barStyle="light-content" style={styles.status} />
                <View style={styles.stackViewContainer}>
                    <View style={{}}>
                        <Text style={styles.header}> Welcome to Viroke Live </Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={styles.paragraph}> You can create your own session or view other sessions. </Text>
                    </View>
                    <View style={{ }}>
                        <TextInput
                            placeholder={"Enter ticket price"}
                            placeholderTextColor={'#BDBDBD'}
                            onChangeText={text => console.log(text)}
                            style={{
                                color: "#BDBDBD", 
                                height: 48, 
                                backgroundColor: "#2A2B31", 
                                textAlign: 'center',
                                borderRadius: 5,
                                fontFamily: "WorkSansLight",
                                fontSize: 18,
                                paddingLeft: 40,
                                paddingRight: 40,
                                width: 250
                            }}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Button 
                            mode="contained"
                            icon="camera"
                            onPress={() => navigation.navigate('StartLive')}
                            style={{
                                backgroundColor: "red",
                                height: 40,
                                justifyContent: 'center'
                            }}>
                            <Text style={{textTransform: "capitalize", textAlign: 'center'}}>{"Go Live"}</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity onPress={() => toggleCameraPreview() }>
                            <Text style={{textTransform: "capitalize", textAlign: 'center', color: "#2F80ED", padding: 20}}>
                                { (cameraPreviewMode === 'enabled') && "Disable My Camera." }
                                { (cameraPreviewMode === 'hang') && "Disable My Camera Completely." }
                                { (cameraPreviewMode === 'disabled') && "Enable My Camera." }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            )
        }}>
      </CameraView>
    )
  }
}

export default StartLiveScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "transparent",
    width: width,
    height: height,
    margin: 0,
    padding: 0,
  },
  stackViewContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  },
  header: {
    fontStyle: "normal",
    fontSize: 18,
    letterSpacing: 0.5,
    color: "#D3D3D3",
    fontFamily: "WorkSans"
  },
  paragraph: {
    color: "#D3D3D3",
    textAlign: 'center',
    fontFamily: "WorkSansLight"
  }
});
