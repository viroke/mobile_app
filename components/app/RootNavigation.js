import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";

import Register from "../../screens/registration.js";
import Onboarding from "../../screens/onboarding.js";
import Session from "../../screens/sessionStart.js";
import Profile from "../../screens/profilePage.js";
import Discover from "../../screens/discover.js";
import Notification from "../../screens/notification.js";
import Wallet from "../../screens/wallet.js";

import HomeScreen from "../home/HomeScreen";
import OnboardingScreen from "../onboarding/OnboardingScreen";
import GetStartedScreen from "../get-started/GetStartedScreen";
import SingleEventScreen from "../events/SingleEvent";

const Stack = createStackNavigator();

function RootNavigations(props) {
  return (
    <Stack.Navigator initialRouteName={"Home"} headerMode={false}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Session" component={Session} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="SingleEvent" component={SingleEventScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigations;
