import * as React from "react";
import { Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import StartLiveScreen from "./StartLiveScreen";
import LiveEndedScreen from "./LiveEndedScreen";
import Header from "./Header";
import Stores from "../../stores";
import AuthedComponentWrapper from "../app/AuthedComponentWrapper";

let Stack = createStackNavigator();

export default function Navigator(props) {
  return (
    <Stack.Navigator initialRouteName={"StartLiveScreen"}>
      <Stack.Screen name="StartLiveScreen"  options={{ headerShown: false}}>
        {props => <AuthedComponentWrapper Component={StartLiveScreen} stores={Stores} /> }
      </Stack.Screen>
      <Stack.Screen name="LiveEndedScreen" component={LiveEndedScreen} tabBarVisible={false} options={{ headerShown: false, tabBarVisible: false }} />
    </Stack.Navigator>
  );
}