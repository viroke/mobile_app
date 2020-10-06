import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text, Button } from "react-native";

import Register from "../../screens/registration.js";
import Onboarding from "../../screens/onboarding.js";
import Session from "../../screens/sessionStart.js";
import Profile from "../../screens/profilePage.js";
import Discover from "../../screens/discover.js";
import Notification from "../../screens/notification.js";
import Wallet from "../../screens/wallet.js";

import OnboardingScreen from "../onboarding/OnboardingScreen";
import GetStartedScreen from "../get-started/GetStartedScreen";

import TabBar from "./TabBar";

import ProfileNavigator from "../profiles/ProfileNavigator";
import HomeNavigator from "../home/HomeNavigator";
import SearchNavigator from "../search/SearchNavigator";
import StartLiveNavigator from "../start-live/StartLiveNavigator";

const Tab = createBottomTabNavigator();

export function ButtomNavigation(props) {
  return (
    <Tab.Navigator initialRouteName={"StartLiveNavigator"} headerMode={false} tabBar={props => <TabBar {...props} />}>
      {/* <Tab.Screen name="Home" component={HomeScreen} labelIcon={'home'} /> */}
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Discover" component={SearchNavigator} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />

        {/* Hidden Screens */}
      <Tab.Screen name="Register" component={Register} options={{ tabBarVisible: false }} />
      <Tab.Screen name="GetStarted" component={GetStartedScreen} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Onboarding" component={OnboardingScreen} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Session" component={Session} options={{ tabBarVisible: false }} />
      <Tab.Screen name="Wallet" component={Wallet} options={{ tabBarVisible: false }} />

      <Tab.Screen name="StartLiveNavigator" component={StartLiveNavigator} options={{ tabBarVisible: false }} />

    </Tab.Navigator>
  );
}