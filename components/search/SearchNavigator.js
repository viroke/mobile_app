import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HostProfileScreen from "../profiles/HostProfile";
import SingleEventScreen from "../events/SingleEvent";
import HomeScreen from "../home/HomeScreen";
import SearchScreen from "./SearchScreen";


let Stack = createStackNavigator();
export default function Navigator(props) {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      {/* <Stack.Screen name="SingleEvent" component={SingleEventScreen} /> */}
      <Stack.Screen name="HostProfile" component={HostProfileScreen} />
    </Stack.Navigator>
  );
}