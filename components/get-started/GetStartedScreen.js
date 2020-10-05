import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import * as AuthenticationAPI from "../../api/authentication";

import { inject, observer } from "mobx-react";
import Storage from "../../common/storage";
// import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from "react-native-paper";
import { SimpleAnimation } from "react-native-simple-animations";
import { saveToken } from "../../store";
import NotificationComponent from "../app/Notification";
import styles from "./styles";

@inject("AuthenticationStore", "UIStore")
@observer
class GetStartedScreen extends React.Component {
  constructor(props) {
    super(props);
    props.AuthenticationStore.navigation = props.navigation;
    this.props.AuthenticationStore.setClassProps(
      [
        {
          name: "UIStore",
          value: this.props.UIStore,
        },
      ],
      this.props.AuthenticationStore.injectedStores
    );
  }

  render() {
    return (
      <ScrollView style={styles.body}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
          {/* <TouchableOpacity onPress={goToRegistration}></TouchableOpacity> */}
          <Text style={styles.heading}>Get Started</Text>
          <Text style={styles.subHeading}>
            Welcome, kindly enter your email below to get started.
          </Text>
          {!this.props.AuthenticationStore.showPasswordInput ? (
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Email"
              placeholderTextColor="#BDBDBD"
              autoCapitalize="none"
              value={this.props.AuthenticationStore.signinCredentials.email}
              onChangeText={(email) => {
                this.props.AuthenticationStore.setClassProps(
                  [
                    {
                      name: "email",
                      value: email,
                    },
                  ],
                  this.props.AuthenticationStore.signinCredentials
                );
              }}
            />
          ) : null}

          {this.props.AuthenticationStore.showPasswordInput ? (
            <SimpleAnimation delay={200} duration={500} fade staticType="zoom">
              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#BDBDBD"
                autoCapitalize="none"
                value={
                  this.props.AuthenticationStore.signinCredentials.password
                }
                secureTextEntry={true}
                onChangeText={(password) => {
                  this.props.AuthenticationStore.setClassProps(
                    [
                      {
                        name: "password",
                        value: password,
                      },
                    ],
                    this.props.AuthenticationStore.signinCredentials
                  );
                }}
              />
            </SimpleAnimation>
          ) : null}

          <TouchableOpacity
            onPress={() => this.props.AuthenticationStore.authenticate()}
          >
            <Button
              style={styles.submitButton}
              loading={this.props.AuthenticationStore.loading}
              color="#ffff"
            >
              <Text style={{ color: "#ffff" }}>
                {this.props.AuthenticationStore.showPasswordInput
                  ? "LOGIN"
                  : "NEXT"}
              </Text>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log("ccccc");
            }}
          >
            <Text style={styles.text}>Already have an account?</Text>
          </TouchableOpacity>
          <NotificationComponent />
        </View>
      </ScrollView>
    );
  }
}

export default GetStartedScreen;
