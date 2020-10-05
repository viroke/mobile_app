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
import { Col, Grid } from "react-native-easy-grid";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Card, Title, Paragraph } from "react-native-paper";
import Navigation from "../navigationTab";
import { Actions } from "react-native-router-flux";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { GET_EVENTS } from "../../api/subscribe";
import Constants from "expo-constants";
import styles from "./styles";
import { inject, observer } from "mobx-react";
import FlatCard from "./parts/FlatCard";
import PeopleCard from "./parts/PeopleCard";
import UpcomingEventsView from "./data-views/UpcomingView";
import PeopleDataView from "./data-views/PeopleView";
import FeedView from "./data-views/FeedView";
import ButtomNavigationTab from "../app/ButtomNavigationTab";

@inject("AuthenticationStore", "UIStore", "ApplicationStore")
@observer
class HomeScreen extends React.Component {
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
        <StatusBar barStyle="light-content" style={styles.status} />
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.title}> Home</Text>
            </View>

            {this.isAuthed() ? (
              <View>
                <TouchableOpacity>
                  <SimpleLineIcons
                    name="wallet"
                    size={30}
                    color="white"
                    style={{
                      transform: [{ rotateY: "180deg" }],
                      opacity: 0.65,
                    }}
                  />
                </TouchableOpacity>
                <Text style={styles.iconLabel}>Wallet</Text>
              </View>
            ) : null}
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={this.props.ApplicationStore.isRefreshing}
                onRefresh={this.props.ApplicationStore.onRefresh}
              />
            }
          >
            <UpcomingEventsView
              listTitle={"My Upcoming Rokes"}
              listView={"FlatCard"}
              stores={this.stores}
            />

            <PeopleDataView
              listTitle={this.isAuthed()
              ? " People You Follow"
              : " People You May Like"}
              stores={this.stores}
            />
            <UpcomingEventsView
              listTitle={"Happening Soon"}
              listView={"FullCard"}
              stores={this.stores}
            />
            <FeedView
              listTitle={""}
              listView={"FullCard"}
              requestPath="events"
              stores={this.stores}
            />
          </ScrollView>
        </View>

        <ButtomNavigationTab
          activeTab="home"
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

export default HomeScreen;
