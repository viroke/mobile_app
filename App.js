import React, { Component } from "react";
import { AppRegistry, StatusBar, Platform, Text, View } from "react-native";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { ButtomNavigation } from "./components/app/RootNavigation";
import * as Font from "expo-font";
import { Asset } from 'expo-asset';
import { SafeAreaView } from "react-native-safe-area-view";
import { Provider } from "mobx-react";
import Storage from "./common/storage";

// Fonts
import WorkSans from "./assets/fonts/WorkSans-Bold.ttf";
import WorkSansLight from "./assets/fonts/WorkSans-Light.ttf";
import WorkSansMedium from "./assets/fonts/WorkSans-Medium.ttf";
import WorkSansSemiBold from "./assets/fonts/WorkSans-SemiBold.ttf";
import Stores from "./stores";
import { enableScreens } from 'react-native-screens';
enableScreens();
import * as Permissions from 'expo-permissions';

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
            <ButtomNavigation />
          </NavigationContainer>
        </Provider>
      );
    }
  }

  alertIfRemoteNotificationsDisabledAsync = async () => {
    const { status } = await Permissions.getAsync(Permissions.CAMERA);
    console.log({ permission: status })
  }

  _loadResourcesAsync = async () => {
    await Asset.loadAsync([
      require('./assets/images/live-end-bg-3.jpg'),      
      require('./assets/mocks/Wallet.png'),    
      require('./assets/mocks/Wallet-blur.png'),
      require('./assets/mocks/SessionEnd-blur.png'),    
    ]);
    await Font.loadAsync({
      WorkSans,
      WorkSansLight,
      WorkSansMedium,
      WorkSansSemiBold,
    })
    await this.alertIfRemoteNotificationsDisabledAsync();
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _intializeCurrentUser = async () => {
    const isOnboarded = await Storage.get("isOnboarded");
    Stores.ApplicationStore.isOnboarded = isOnboarded;
    
    // TODO: verify user token here to ensure access to api still granted
    const currentUser = await Storage.get("user-account-details");
    const token = await Storage.get("api-access-token");
    if(currentUser && token) {
      await Stores.AuthenticationStore.refreshCurrentUser();
    }
  }

  _handleFinishLoading = async () => {
    await this._intializeCurrentUser();
    this.setState({ isLoadingComplete: true });
  };
}
export default VirokeEntryPoint;
AppRegistry.registerComponent("VirokeEntryPoint", () => VirokeEntryPoint);
