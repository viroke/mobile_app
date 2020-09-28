import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;
    return (
      <View>
        <TouchableOpacity onPress={this._pickImage}>
          <View style={styles.container}>
            <View style={styles.subContainer}>
              <AntDesign style={styles.icon} name="camera" color="#2F80ED" />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={styles.text}> Add a profile pic </Text>
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };

  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
}

const styles = StyleSheet.create({
  icon: {
    color: "#2F80ED",
    textAlign: "center",
    fontSize: 20,
  },
  container: {
    marginRight: 40,
    marginLeft: 20,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 60,
    paddingLeft: 10,
    paddingRight: 60,
    backgroundColor: "#000000",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#2F80ED",
    width: 45,
    height: 45,
  },
  subContainer: {
    marginLeft: 2,
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundColor: "#2A2B31",
    borderRadius: 50,
    borderWidth: 1,
    width: 45,
    height: 45,
  },
  text: {
    position: "absolute",
    fontStyle: "normal",
    fontWeight: "500",
    left: 99,
    top: 40,
    letterSpacing: -0.3,
    color: "#535D7E",
  },
});
