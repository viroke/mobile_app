import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CalendarScreen from "./CalendarScreen";
let Stack = createStackNavigator();
import Stores from "../../stores";
import AuthedComponentWrapper from "../app/AuthedComponentWrapper";
import WalletPicture from "../../assets/mocks/Wallet.png"
import WalletBlur from "../../assets/mocks/Wallet-blur.png"
import { Image, Platform, ImageBackground } from 'react-native';
import { observer } from "mobx-react-lite"
import GoLiveNavHeader from "../app/GoLiveNavHeader";

const BlurBackground = () => (
  <Image source={Platform.OS === "ios" ? WalletPicture : WalletBlur } />
)
export default function Navigator(props) {
  return (
    <Stack.Navigator initialRouteName={"CalandarScreen"}>
      <Stack.Screen name="CalandarScreen"  options={GoLiveNavHeader("My Sessions")} >
        {props => <AuthedComponentWrapper Component={CalendarScreen} stores={Stores} authRequired={true} BlurBackground={BlurBackground} /> }
      </Stack.Screen>
    </Stack.Navigator>
  );
}