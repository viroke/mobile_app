import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HostProfileScreen from "../profiles/HostProfile";
import SingleEventScreen from "../events/SingleEvent";



let ProfileStack = createStackNavigator();
export default function ProfileNavigator(props) {
  return (
    <ProfileStack.Navigator headerMode={false}>
      <ProfileStack.Screen name="SingleEvent" component={SingleEventScreen} />
      <ProfileStack.Screen name="HostProfile" component={HostProfileScreen} />
    </ProfileStack.Navigator>
  );
}