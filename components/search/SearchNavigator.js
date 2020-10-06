import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HostProfileScreen from "../profiles/HostProfile";
import SingleEventScreen from "../events/SingleEvent";
import HomeScreen from "../home/HomeScreen";
import SearchScreen from "./SearchScreen";
import GoLiveNavHeader from "../app/GoLiveNavHeader";


let Stack = createStackNavigator();
export default function Navigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={GoLiveNavHeader("Discover")}/>
      {/* <Stack.Screen name="SingleEvent" component={SingleEventScreen} /> */}
      <Stack.Screen name="HostProfile" component={HostProfileScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}