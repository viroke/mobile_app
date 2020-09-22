import React, { Component } from "react";
import IconBadge from 'react-native-icon-badge';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";

const { width } = Dimensions.get("window");

export default function Navigation(props) {
  state = {
    BadgeCount: 23,
 }
  const { activeTab } = props;
  return (
    <View style={styles.bottom}>
      <TouchableOpacity style={styles.link} onPress={() => Actions.home()}>
        <Feather
          name="home"
          size={24}
          color={activeTab === "home" ? "#2F80ED" : "#CDCCCE"}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => Actions.discover()}>
      <Feather name="film" 
         size={24} 
         color={activeTab === "video" ? "#2F80ED" : "#CDCCCE"} style={{ opacity:0.70,}} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => Actions.notification()}>
      <Feather name="bell"
       size={24} 
       color={activeTab === "notification" ? "#2F80ED" : "#CDCCCE"} style={{ opacity:0.70,}}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.link} onPress={() => Actions.profile()}>
      <AntDesign name="user" 
      size={24} color={activeTab === "profile" ? "#2F80ED" : "#CDCCCE"} style={{ opacity:0.70,}}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  bottom: {
    backgroundColor: "#1D2024",
    position: "absolute",
    bottom: -2,
    width,
    height: 64,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 20,
    borderWidth: 1,
    borderTopColor: "#1D2024",
  },
  link: {
    width: 120,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
});
