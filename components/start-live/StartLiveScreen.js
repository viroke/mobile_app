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
  Keyboard,  
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";
import { Button } from 'react-native-paper';
import { inject, observer } from "mobx-react";
import { Camera } from 'expo-camera';
import CameraView from '../common/CameraView';
import { Feather } from "@expo/vector-icons";
import { Modalize } from 'react-native-modalize';
import { CustomTextInput, CustomTextInputWithIcon } from "../common/CustomFormElements";
import GoLiveTabs from './GoLiveTabs';
import UploadImage from "../common/uploadImage.js";

const { width, height } = Dimensions.get("window");
const ModalHeader = ({ text }) => (
    <View>
        <Text style={{ textAlign: 'center', fontSize: 21, fontFamily: "WorkSansSemiBold", padding: 10, color: '#BDBDBD'}}>{text}</Text>
    </View>
);

class StartLiveScreen extends React.Component {

  constructor(props) {
    super(props);
    this.goLiveModalRef = React.createRef();
  }

  
  render() {
    return (
      <CameraView 
        blur={true}
        renderComponentOnView={(cameraProps) => {
            let [cameraPreviewMode, setCameraPreviewMode] = useState(cameraProps.hasCameraAccess ? 'enabled' : 'disabled');
            let [ticketPrice, setTicketPrice] = useState(null);
            let [noAnimate, setNoAnimate] = useState(false);

            let toggleCameraPreview3Step = async () => {
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

            let toggleCameraPreview2Step = async () => {
                if(!cameraProps.camera) return;
                switch (cameraPreviewMode) {
                    case 'enabled':
                            await cameraProps.camera.pausePreview();
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

            const showGoLiveModal = () => {
                if(this.goLiveModalRef.current) this.goLiveModalRef.current.open();
                Keyboard.dismiss();
            }

            const onGoLivePress = () => {
              if(this.props.stores.AuthenticationStore.isAuthed) showGoLiveModal()
              else this.props.openAuthentication(() => {
                showGoLiveModal();
              });
            }

            onGoLivePress.bind(this);
            return (
              <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
                <View style={{...styles.body, backgroundColor: (cameraPreviewMode === 'disabled') ? '#18191D' : 'transparent', elevation: 0 }}>
                <StatusBar barStyle="light-content" style={styles.status} />
                <View style={styles.stackViewContainer}>
                    <View style={{}}>
                        <Text style={styles.header}> Welcome{this.props.stores.AuthenticationStore.isAuthed ? ", " +this.props.stores.AuthenticationStore.currentUser.fullName : " to Viroke Creator"} </Text>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={styles.paragraph}> You can create your own session or view other sessions. {this.props.stores.AuthenticationStore.payoutBanks || 'null'}</Text>
                    </View>
                    
                    <View style={{ }}>
                    
                        <TextInput
                            placeholder={"Enter ticket price"}
                            placeholderTextColor={'#BDBDBD'}
                            onChangeText={text => setTicketPrice(text)}
                            keyboardType='numeric'
                            keyboardAppearance='dark'
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
                            icon="video"
                            onPress={onGoLivePress}
                            style={{
                                backgroundColor: "#D95148",
                                height: 40,
                                justifyContent: 'center',
                                elevation: 0
                            }}
                            contentStyle={{ height: 40 }}>
                            <Text style={{textTransform: "capitalize", textAlign: 'center'}}>{"Go Live"}</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <TouchableOpacity onPress={() => toggleCameraPreview2Step() }>
                            <Text style={{textTransform: "capitalize", textAlign: 'center', color: "#2F80ED", padding: 20}}>
                                { (cameraPreviewMode === 'enabled') && "Disable My Camera." }
                                { (cameraPreviewMode === 'hang') && "Disable My Camera Completely." }
                                { (cameraPreviewMode === 'disabled') && "Enable My Camera." }
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <Modalize
                    ref={this.goLiveModalRef}
                    modalStyle={{ backgroundColor: "#18191D" }}
                    modalHeight={400}
                    HeaderComponent={<ModalHeader text={"Go Live"}/>}
                    keyboardShouldPersistTaps={true}
                >
                  <GoLiveTabs ticketPrice={ticketPrice} noAnimate={noAnimate}/>
                </Modalize>
                </View>
                </TouchableWithoutFeedback>
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
