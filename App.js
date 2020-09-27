import React, { Component } from "react";
import { AppRegistry, StatusBar, Platform, Text, View } from "react-native";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./components/app/RootNavigation";
import * as Font from "expo-font";
import { SafeAreaView } from "react-native-safe-area-view";
import { Provider } from 'mobx-react';

// Fonts
import WorkSans from "./assets/fonts/WorkSans-Bold.ttf";
import WorkSansLight from "./assets/fonts/WorkSans-Light.ttf";
import WorkSansMedium from "./assets/fonts/WorkSans-Medium.ttf";
import WorkSansSemiBold from "./assets/fonts/WorkSans-SemiBold.ttf";
import Stores from './stores';

class VirokeEntryPoint extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    console.ignoredYellowBox = ["Remote debugger"];
    if (!this.state.isLoadingComplete) {
      return (
        <Provider {...Stores}>
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        </Provider>
      );
    } else {
      return (
        <Provider {...Stores}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    await Font.loadAsync({
      WorkSans,
      WorkSansLight,
      WorkSansMedium,
      WorkSansSemiBold,
    });
    // TODO: verify user token here to ensure access to api still granted
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
export default VirokeEntryPoint;
AppRegistry.registerComponent("VirokeEntryPoint", () => VirokeEntryPoint);
