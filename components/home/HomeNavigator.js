import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HostProfileScreen from "../profiles/HostProfile";
import SingleEventScreen from "../events/SingleEvent";
import HomeScreen from "../home/HomeScreen";


let Stack = createStackNavigator();
export default function Navigator(props) {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SingleEvent" component={SingleEventScreen} />
      <Stack.Screen name="HostProfile" component={HostProfileScreen} />
    </Stack.Navigator>
  );
}