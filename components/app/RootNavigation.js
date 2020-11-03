import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, Button } from "react-native";

import OnboardingScreen from "../onboarding/OnboardingScreen";
import GetStartedScreen from "../get-started/GetStartedScreen";

import TabBar from "./TabBar";

import ProfileNavigator from "../profiles/ProfileNavigator";
import HomeNavigator from "../home/HomeNavigator";
import SearchNavigator from "../search/SearchNavigator";
import StartLiveNavigator from "../start-live/StartLiveNavigator";

import LiveNavigator from "../live/LiveNavigator";
import WalletNavigator from "../wallet/WalletNavigator";
import SessionsNavigator from "../sessions/SessionsNavigator";

import LiveEndedScreen from "../start-live/LiveEndedScreen";
import Stores from "../../stores";


const Tab = createBottomTabNavigator();

export function ButtomNavigation(props) {
  return (
    <Tab.Navigator initialRouteName={Stores.ApplicationStore.isOnboarded ? "StartLiveNavigator": "Onboarding"} headerMode={false} tabBar={props => <TabBar {...props} />}>
      {/* <Tab.Screen name="Home" component={HomeScreen} labelIcon={'home'} /> */}
      {/* <Tab.Screen name="Home" component={HomeNavigator} /> */}
      <Tab.Screen name="StartLiveNavigator" component={StartLiveNavigator} />
      <Tab.Screen name="Wallet" component={WalletNavigator} />
      <Tab.Screen name="SessionsNavigator" component={SessionsNavigator} />
      <Tab.Screen name="Discover" component={SearchNavigator} />
      {/* <Tab.Screen name="Notification" component={LiveEndedScreen} /> */}
      <Tab.Screen name="Profile" component={LiveEndedScreen} />
      


        {/* Hidden Screens */}
      {/* <Tab.Screen name="Register" component={Register} options={{ tabBarVisible: false }} /> */}
      <Tab.Screen name="LiveEndedScreen" component={LiveEndedScreen} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Onboarding" component={OnboardingScreen} tabBarVisible={false} options={{ tabBarVisible: false }} />
      {/* <Tab.Screen name="Session" component={Session} options={{ tabBarVisible: false }} /> */}
      {/* <Tab.Screen name="StartLiveNavigator" component={StartLiveNavigator} options={{ tabBarVisible: false }} /> */}

      <Tab.Screen name="LiveNavigator" component={LiveNavigator} options={{ tabBarVisible: false }} />
      <Tab.Screen name="WalletNavigator" component={WalletNavigator} options={{ tabBarVisible: false }} />

    </Tab.Navigator>
  );
}