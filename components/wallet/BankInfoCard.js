import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Button } from 'react-native-paper';

const BankInfoCard = (props) => {

    return (
        <View style={{ padding: 5, backgroundColor: "#2A2B31", borderRadius: 5, width: 320, marginRight: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between', padding: 5}}>
                <Text ellipsizeMode='tail' numberOfLines={1} style={{color: "#FFFFFF", fontSize: 15, fontFamily: "WorkSansSemiBold", textTransform: 'uppercase', width: '70%'}}>
                    ISAAC WILLIAMS AKINGBOJU AYO
                </Text>
                <Button 
                mode="contained"
                onPress={() => console.log("want to fund wallet")}
                style={{
                    backgroundColor: "#584B4B",
                }}>
                  <Text style={{color: "#FF7E7E", fontSize: 10, fontFamily: "WorkSansMedium", textTransform: 'none'}}>Delete</Text>
                  </Button>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 10, justifyContent: 'space-between', padding: 5}}>
                <Text style={{color: "#FFFFFF", fontSize: 15, fontFamily: "WorkSansMedium"}}>
                    0011229283
                </Text>
                <Text style={{color: "#FFFFFF", fontSize: 14, fontFamily: "WorkSansLight", textTransform: 'capitalize', marginTop: 10, marginBottom: 20}}>
                    First City Monument Bank
                </Text>
            </View>
        </View>
    );
};

export default BankInfoCard;