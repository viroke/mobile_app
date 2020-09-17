import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ScrollView, StatusBar, TouchableOpacity} from 'react-native';
import {EvilIcons, Entypo } from "@expo/vector-icons";
import * as Font from 'expo-font';
import { Actions } from 'react-native-router-flux';
import Navigation from "../components/navigationTab";

const widthScreen = Dimensions.get("window").width;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const heightScreen = Dimensions.get("window").height;

class Wallet extends React.Component {
    state = {
        search: '',
        fontLoaded: false,
      }

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

      render() {
        const  returnBack = () => {
            Actions.session()
           }

           const  goToNotification = () => {
            Actions.notification()
         }
            if (!this.state.fontLoaded) {
              return null; // render some progress indicator
            }
            return (
                <View style={styles.body}>
                <StatusBar barStyle="light-content" />
                <ScrollView>
                 <View style={styles.container}>
                 <View>
                 <View style={styles.topBar}>
                    <View>
                    <Text style={{ fontSize: 24, fontStyle: 'normal',
                    fontFamily: 'WorkSansMedium',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    lineHeight: 28,
                    letterSpacing: -0.8,
                    color: '#E0E0E0', }}>
                        Wallet
                        </Text>
                    </View>
                </View>
                </View>

        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View>
            <View style={styles.walletCard}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{
                width: 100,
                height: 20,
                fontFamily: 'WorkSansLight',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 24,
                lineHeight: 24,
                color: '#011627'}}>
                Balance
                </Text>
              </View>

              <Text style={{ color: "#011627", fontSize: 38, fontFamily: 'WorkSansMedium', }}>
              <Text>&#8358;</Text> 3,950
              </Text>
            </View>
            <TouchableOpacity
              style={styles.add}
              onPress={() => Actions.startPlan()}
            >
              <Entypo name="wallet" size={24} color="#2F80ED" />
            </TouchableOpacity>
          </View>
          <ScrollView
            style={{ flexDirection: "row", padding: 10 }}
            scrollEventThrottle={16}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {/*debit cards*/}
            <View style={styles.debitCard}>
              <EvilIcons
                name="trash"
                size={28}
                color="white"
                style={{ position: "absolute", top: 15, right: 15 }}
              />

              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    width: 139,
                    height: 19,
                    fontFamily: 'WorkSansMedium',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 14,
                    marginBottom:15,
                    lineHeight: 16,
                  }}
                >
                  GIDEON OLADIMEJI
                </Text>
                <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}
                >
                  **** **** **** 1293
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 30,
                  }}
                >
                  <View>
                    <Text style={{
                    fontFamily: 'WorkSansLight',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: 16,
                    color: '#BDBDBD' }}>
                    Expires
                    </Text>
                    <Text style={{ fontSize: 14, color: "#fff" }}>
                    11/22
                    </Text>
                  </View>

                  <Image source={require("../assets/images/mastercard.png")} />
                </View>
              </View>
            </View>

            <View style={[styles.debitCard, { backgroundColor: "#3D4E76" }]}>
              <EvilIcons
                name="trash"
                size={28}
                color="white"
                style={{ position: "absolute", top: 15, right: 15 }}
              />

              <View style={{ marginTop: 20 }}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    width: 139,
                    height: 19,
                    fontFamily: 'WorkSansMedium',
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    fontSize: 14,
                    marginBottom:15,
                    lineHeight: 16, }}
                >
                 RUTH ADEGBESAN
                </Text>
                <Text
                  style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}
                >
                  **** **** **** 5038
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 30,
                  }}
                >
                  <View>
                    <Text style={{
                    fontFamily: 'WorkSansLight',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: 16,
                    color: '#BDBDBD' }}>
                    Expires
                    </Text>
                    <Text style={{ fontSize: 14, color: "#fff" }}>
                    11/22
                    </Text>
                  </View>

                  <Image source={require("../assets/images/mastercard.png")} />
                </View>
              </View>
            </View>
            {/*debit cards*/}
          </ScrollView>
        </View>

        <View
          style={{
            // flex: 1,
            width: widthScreen,
            height: 200,
            backgroundColor: "#18191D",
            padding: 10,
            paddingTop: 30,
          }}
        >
          <View
            style={{
              width: widthScreen,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontFamily: 'WorkSansMedium',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 18,
                lineHeight: 21,
                textAlign: 'center',
                color: '#BDBDBD', }}
            >
              Transaction History
            </Text>
          </View>

          <View style={styles.table}>
          <View style={styles.tr}>
              <Text style={{
                color: "#F5F7FA",
                fontFamily: 'WorkSansMedium',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                width:20,
                lineHeight: 15,}}>
               03
              </Text>
              <Text style={{ fontSize: 10, color: "#999" }}>
              May
              </Text>
            </View>

            <View style={styles.tr}>
              <Text style={{
                fontWeight: "bold",
                color: "#F5F7FA",
                width: 150,
                height: 15,
                fontFamily: 'WorkSansMedium',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                lineHeight: 15,}}>
               Withdraw Money From Wallet
              </Text>
              <Text style={{ fontSize: 10, color: "#999" }}>
              Successful
              </Text>
            </View>
            <View style={[styles.tr, { alignItems: "flex-end" }]}>
              <Text style={{ fontSize: 14, color: "green", fontWeight: "700" }}>
                N50.23
              </Text>
              <Text style={{ fontSize: 12, color: "#999" }}>50mins ago</Text>
            </View>

          </View>

          <View style={styles.table}>
          <View style={styles.tr}>
              <Text style={{
                color: "#F5F7FA",
                fontFamily: 'WorkSansMedium',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                width:20,
                lineHeight: 15,}}>
               03
              </Text>
              <Text style={{ fontSize: 10, color: "#999" }}>
              May
              </Text>
            </View>

            <View style={styles.tr}>
              <Text style={{
                fontWeight: "bold",
                color: "#F5F7FA",
                width: 150,
                height: 15,
                fontFamily: 'WorkSansMedium',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                lineHeight: 15,}}>
               Withdraw Money From Wallet
              </Text>
              <Text style={{ fontSize: 10, color: "#999" }}>
              Successful
              </Text>
            </View>
            <View style={[styles.tr, { alignItems: "flex-end" }]}>
              <Text style={{ fontSize: 14, color: "green", fontWeight: "700" }}>
                N50.23
              </Text>
              <Text style={{ fontSize: 12, color: "#999" }}>50mins ago</Text>
            </View>

          </View>
          {/* comment*/}
        </View>

    </View>
    </ScrollView>
    <Navigation activeTab="home" />
    </View>
            )}
}

export default Wallet

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor:'#18191D',
        width:width,
        height:height,

      },
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: "#18191D",
      },
      topBar: {
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "space-between",
        padding: 20,
      },
      walletCard: {
        width: widthScreen - 40,
        height: heightScreen - (widthScreen + 400),
        padding: 20,
        backgroundColor: "#FDFFFC",
        borderRadius: 10,
        margin: 10,
      },
      add: {
        width: 43,
        height: 43,
        position: "absolute",
        bottom: 20,
        right: 30,
        backgroundColor: "#b8cfea",
        borderRadius: 34,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
      },
      debitCard: {
        width: widthScreen - 80,
        height: heightScreen - (widthScreen + 400),
        padding: 20,
        backgroundColor: "#7000AB",
        borderRadius: 10,
        margin: 10,
      },
      table: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderStyle:'solid',
        borderBottomWidth: 0.5,
        borderBottomColor:'#E0E0E0',
      },
      tr: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
      },
});