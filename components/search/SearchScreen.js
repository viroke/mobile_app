import React, { Component, useEffect, useState, Suspense } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { inject, observer } from "mobx-react";
import { Searchbar } from "react-native-paper";
import ResultDataView from "./ResultDataView";

const { width, height } = Dimensions.get("window");

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    props.ApplicationStore.navigation = props.navigation;
    this.props.ApplicationStore.setClassProps(
      [
        {
          name: "UIStore",
          value: this.props.UIStore,
        },
        {
          name: "AuthenticationStore",
          value: this.props.AuthenticationStore,
        },
      ],
      this.props.ApplicationStore.injectedStores
    );

    this.stores = {
      ApplicationStore: props.ApplicationStore,
      AuthenticationStore: props.AuthenticationStore,
      UIStore: props.UIStore,
    };
  }

  isAuthed() {
    return this.props.AuthenticationStore.isAuthed;
  }
  render() {
    return (
      <View style={styles.body}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.container}>
            <View style={styles.search}>
              <Searchbar
                style={styles.searchTextField}
                iconColor="#ffff"
                placeholderTextColor="#ffff"
                placeholder="Type to search"
              />
            </View>

            <ResultDataView stores={this.stores}/>
        </View>
      </View>
    )
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#18191D",
    width: width,
    height: height,
    margin: 0,
    padding: 0
  },

  container: {
    flex: 1,
    marginLeft: 5,
    marginRight: 0,
  },

  title: {
    fontSize: 24,
    fontFamily: "WorkSans",
    height: 28,
    left: 0,
    right: 69.87,
    fontStyle: "normal",
    fontWeight: "600",
    letterSpacing: 1,
    color: "#E0E0E0",
    opacity: 0.85,
  },

  topImage: {
    width: 320,
    height: 280,
    top: 20,
    borderRadius: 5,
    opacity: 0.75,
  },

  search: {
    marginTop: 15,
    marginBottom: 5,
    marginRight: 5,
    color: "#FFFF",
  },

  searchTextField: {
    height: 50,
    backgroundColor: "#2A2B31",
    borderRadius: 3,
    color: "#FFFF",
  },

  name: {
    height: 16,
    left: 0,
    top: 0,
    fontFamily: "WorkSansMedium",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.8,
    color: "#FFFFFF",
    marginTop: 3,
    left: 30,
    opacity: 0.75,
  },

  imageCard: {
    height: 80,
    backgroundColor: "#2A2B31",
  },

  imageCardTwo: {
    width: 150,
    height: 220,
    backgroundColor: "#C4C4C4",
    borderRadius: 3,
  },

  imageCardBottom: {
    height: 127,
    borderRadius: 4,
    backgroundColor: "#2A2B31",
    opacity: 0.7,
  },
});
