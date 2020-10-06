import * as React from "react";
import { Image, View, Text, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import HostProfileScreen from "../profiles/HostProfile";
import SingleEventScreen from "../events/SingleEvent";
import HomeScreen from "../home/HomeScreen";
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
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={GoLiveNavHeader("Home")} />
      <Stack.Screen name="SingleEvent" component={SingleEventScreen} options={{ headerShown: false }} />
      <Stack.Screen name="HostProfile" component={HostProfileScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}