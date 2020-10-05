import * as React from "react";
import styles from "../styles";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PeopleCard = (props) => {
  return (
    <TouchableOpacity>
      <View style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
      }}>
      <LinearGradient
          colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
          start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
          style={{ height: 68, width: 67, borderRadius: 30, }}
      >
        <Image source={{ uri: props.person.profileImage }} style={{
            width: 66,
            height: 66,
            borderColor: "#2F80ED",
            borderRadius: 40,
            opacity: 0.9,
            justifyContent:'center',
            marginRight: 10
          }} />
        </LinearGradient>
        <Text style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: 12,
          lineHeight: 14,
          letterSpacing: 1,
          color: "#E0E0E0",
          marginTop: 5,
          height: 28,
          textAlign: "center",
          fontFamily: "WorkSansMedium",
          opacity: 0.85,
          marginRight: 10,
          marginLeft: 10
        }}>{props.person.fullName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PeopleCard;
