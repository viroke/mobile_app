import * as React from "react";
import { Image, View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import ViewerScreen from "./Viewer";

let Stack = createStackNavigator();

export default function Navigator(props) {
  return (
    <Stack.Navigator initialRouteName={"ViewerScreen"}>
      <Stack.Screen name="ViewerScreen" component={ViewerScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="LiveEndedScreen" component={LiveEndedScreen} tabBarVisible={false} options={{ headerShown: false, tabBarVisible: false }} /> */}
    </Stack.Navigator>
  );
}