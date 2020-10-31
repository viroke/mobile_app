import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import WalletScreen from "./WalletScreen";
let Stack = createStackNavigator();
import ScreenHeader from "./ScreenHeader";
import Stores from "../../stores";
import AuthedComponentWrapper from "../app/AuthedComponentWrapper";
import WalletPicture from "../../assets/mocks/Wallet.png"
import WalletBlur from "../../assets/mocks/Wallet-blur.png"
import { Image, Platform, ImageBackground } from 'react-native';
import { observer } from "mobx-react-lite"

const BlurBackground = () => (
  <Image source={Platform.OS === "ios" ? WalletPicture : WalletBlur } />
)
export default function Navigator(props) {
  return (
    <Stack.Navigator initialRouteName={"WalletScreen"}>
      <Stack.Screen name="WalletScreen"  options={ScreenHeader("Wallet", Stores)} >
        {props => <AuthedComponentWrapper Component={WalletScreen} stores={Stores} authRequired={true} BlurBackground={BlurBackground} /> }
      </Stack.Screen>
    </Stack.Navigator>
  );
}