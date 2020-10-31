import React, { Fragment, useEffect, useState, useRef } from "react";
import { useNavigation } from '@react-navigation/native';
import { observer } from "mobx-react"
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from "react-native";
import { Button } from 'react-native-paper';
import { Modalize } from 'react-native-modalize';
import { CustomTextInput, CustomTextInputWithIcon } from "../common/CustomFormElements";
import UploadImage from "../common/uploadImage.js";
import ModalHeader from "../common/ModalHeader.js";
import { BlurView } from 'expo-blur';
const { width, height } = Dimensions.get("window");

export default observer(function AuthedComponentWrapper(props) {
    const {Component, stores = {}, authRequired = false, BlurBackground } = props;
    let {AuthenticationStore, UIStore} = stores;
    let [signUpView, setSignUpView] = useState(true);
    let [onDoneCb, setOnDoneCb] = useState(null);
    let signUpModalRef = useRef();

    const toggleAuthView = () => {
        setSignUpView(!signUpView);
    };
    const showSignUpModal = () => {
        if(signUpModalRef && signUpModalRef.current) signUpModalRef.current.open();
    };

    const openAuthentication = (callback) => {
        AuthenticationStore.onDoneCb = callback;
        if(signUpModalRef && signUpModalRef.current) signUpModalRef.current.open();
    };

    const closeAuthentication = () => {
        if(signUpModalRef && signUpModalRef.current) signUpModalRef.current.close();
    };

    const onCloseAuthentication = (callback) => {
        callback(signUpModalRef);
    };

    const updateAuthStore = (key, value) => {
        AuthenticationStore.setClassProps(
            [
                {
                    name: key,
                    value,
                },
            ],
            AuthenticationStore.signinCredentials
        );
    }
    const handleEmailInput = email => updateAuthStore("email", email);
    const handlePasswordInput = password => updateAuthStore("password", password);

    const handleAuthenticationClick = async () => {
        let userData = await AuthenticationStore.authenticate({ autonavigate: false });
        if(userData) closeAuthentication();
        if(AuthenticationStore.onDoneCb && typeof AuthenticationStore.onDoneCb === 'function') AuthenticationStore.onDoneCb(userData);
    }

    const destoryUnWantedObjects = () => {
        AuthenticationStore.onDoneCb = null;
    }
    useEffect(() => {
        AuthenticationStore.showPasswordInput = true;
        AuthenticationStore.setClassProps(
            [
                {
                    name: "UIStore",
                    value: UIStore,
                }
            ],
            AuthenticationStore.injectedStores
        );

        return destoryUnWantedObjects;
    }, []);

    return (
        <Fragment>
            { authRequired && !AuthenticationStore.isAuthed ?
                <Fragment>
                    {typeof BlurBackground === 'function' && <BlurBackground />}
                    <BlurView intensity={100} tint={'dark'} style={{position: 'absolute', height: "100%", width: '100%'}}>
                        <View style={{ width, height, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.headText}>See your earnings.</Text>
                            <Text style={{ color: "#BDBDBD", fontFamily: 'WorkSansMedium', fontSize: 16, margin: 20, textAlign: 'center' }}>Our secured wallet system allows you to withdraw your earning and see your transaction history.</Text>
                            <Button 
                                mode="contained"
                                icon="shield"
                                onPress={openAuthentication}
                                style={{
                                    marginTop: 0,
                                    backgroundColor: "#2F80ED",
                                    height: 40,
                                    justifyContent: 'center',
                                }}
                                contentStyle={{ height: 40 }}>
                                <Text style={{textTransform: "none", textAlign: 'center',}}>{"Set up my account"}</Text>
                            </Button>
                        </View>
                    </BlurView>
                </Fragment>
            : <Fragment>{typeof Component === 'function' && <Component {...props} 
                    openAuthentication={openAuthentication} 
                    closeAuthentication={closeAuthentication}
                />}</Fragment> }

            <Modalize
                ref={signUpModalRef}
                modalStyle={{ backgroundColor: "#18191D" }}
                modalHeight={480}
                HeaderComponent={<ModalHeader text={"Get Started"}/>}
                keyboardShouldPersistTaps={true}
            >
                <View style={{ padding: 20}}>
                { signUpView ?
                    <>
                    <UploadImage style={{ marginBottom: 20, opacity: 0.9, alignItems: 'center' }}/>
                    <CustomTextInput placeholder={'Full Name'} style={{ textAlign: 'left' }}/>
                    </>
                    : null }
                <CustomTextInput onChangeText={handleEmailInput} value={"williamscalg@gmail.com"} placeholder={'Email Address'} style={{ marginTop: 15, marginBottom: 15,  textAlign: 'left' }} keyboardType={'email-address'}/>
                <CustomTextInputWithIcon 
                    placeholder={'Password'}
                    value={"password"} 
                    secureTextEntry={true} 
                    icon={{
                        color: '#BDBDBD',
                        size: 18
                    }}
                    onChangeText={handlePasswordInput}
                    style={{ textAlign: 'left' }}
                />
                <Button 
                    mode="contained"
                    icon="shield"
                    onPress={handleAuthenticationClick}
                    loading={AuthenticationStore.loading}
                    style={{
                        marginTop: 20,
                        backgroundColor: "#2F80ED",
                        height: 50,
                        justifyContent: 'center',
                    }}
                    contentStyle={{ height: 50 }}>
                    <Text style={{textTransform: "capitalize", textAlign: 'center', fontSize: 18 }}>{signUpView ? "Register" : "Sign In"}</Text>
                </Button>

                <TouchableOpacity style={{ flex: 0 , justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 20}} onPress={toggleAuthView}>
                    <Text style={{textTransform: "none", textAlign: 'center', color: "#2F80ED", fontSize: 14, paddingRight: 10 }}>
                    {signUpView ? "Already have an account? Sign In." : "Create Account."}
                    </Text>
                </TouchableOpacity>
                </View>
            </Modalize>

        </Fragment>
    );
})

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