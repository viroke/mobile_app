import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";

class Inputs extends Component {
  state = {
    fontLoaded: false,
  };

  componentDidMount() {
    this.loadAssetsAsync();
  }

  async loadAssetsAsync() {
    await Font.loadAsync({
      WorkSans: require("../assets/fonts/WorkSans-Bold.ttf"),
      WorkSansLight: require("../assets/fonts/WorkSans-Light.ttf"),
      WorkSansMedium: require("../assets/fonts/WorkSans-Medium.ttf"),
      WorkSansSemiBold: require("../assets/fonts/WorkSans-SemiBold.ttf"),
    });
    this.setState({ fontLoaded: true });
  }

  state = {
    firstName: "",
    lastName: "",
    userName: "",
    Telephone: "",
  };
  handlefirstName = (text) => {
    this.setState({ firstName: text });
  };
  handlelastName = (text) => {
    this.setState({ lastName: text });
  };
  handleuserName = (text) => {
    this.setState({ userName: text });
  };
  handleTelephone = (text) => {
    this.setState({ Telephone: text });
  };
  login = (firstName, lastName, userName, Telephone) => {
    alert(
      "first name: " +
        firstName +
        " last name: " +
        lastName +
        " user name: " +
        userName +
        " Telephone: " +
        Telephone
    );
  };
  render() {
    // const  goToHome = () => {
    //    Actions.home()
    // }
    if (!this.state.fontLoaded) {
      return null; // render some progress indicator
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="First Name"
          placeholderTextColor="#BDBDBD"
          autoCapitalize="none"
          onChangeText={this.handlefirstName}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Last Name"
          placeholderTextColor="#BDBDBD"
          autoCapitalize="none"
          onChangeText={this.handlelastName}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="#BDBDBD"
          autoCapitalize="none"
          onChangeText={this.handleSurname}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="+234 | Mobile Number"
          placeholderTextColor="#BDBDBD"
          autoCapitalize="none"
          onChangeText={this.handleTelephone}
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}> Register </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    marginBottom: 10,
    margin: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 3,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.3,
    paddingLeft: 15,
    color: "#BDBDBD",
    backgroundColor: "#2A2B31",
    fontFamily: "WorkSansMedium",
    borderColor: "#2A2B31",
  },
  submitButton: {
    backgroundColor: "#2F80ED",
    padding: 10,
    margin: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    opacity: 0.7,
  },
  submitButtonText: {
    color: "white",
    borderRadius: 4,
    fontStyle: "normal",
    fontWeight: "500",
    fontFamily: "WorkSansMedium",
  },
});
