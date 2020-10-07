import * as React from "react";
import { Image, View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import StartLiveScreen from "./StartLiveScreen";
import LiveEndedScreen from "./LiveEndedScreen";
const { width, height } = Dimensions.get("window");
import { Button } from 'react-native-paper';
import { SimpleLineIcons } from "@expo/vector-icons";
import GoLiveNavHeader from "../app/GoLiveNavHeader";

let Stack = createStackNavigator();

function HomeHeader() {
  return (
    <View style={{
      backgroundColor: '#18191D',
      width: 50, height: 50,
     }}>
      <Image
        style={{ width: 40, height: 40, left: 10, resizeMode: 'cover', padding: 10, margin: 10 }}
        source={require('../../assets/logo/favicon2x.png')}
      />
    </View>
  );
}

export default function Navigator(props) {
  return (
    <Stack.Navigator initialRouteName={"StartLiveScreen"}>
      <Stack.Screen name="StartLiveScreen" component={StartLiveScreen} options={{ headerShown: false }} />
      <Stack.Screen name="LiveEndedScreen" component={LiveEndedScreen} tabBarVisible={false} options={{ headerShown: false, tabBarVisible: false }} />
    </Stack.Navigator>
  );
}