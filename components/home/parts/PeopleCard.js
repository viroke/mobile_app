import * as React from "react";
import styles from "../styles";
import { Text, View, TouchableOpacity, Image } from "react-native";
import ImageLoader from '../../common/ImageLoader';

const PeopleCard = (props) => {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingLeft: 10,
    }}>
      <ImageLoader
        style={{
            marginTop: 10,
            width: 66,
            height: 66,
            borderColor: "#2F80ED",
            borderRadius: 40,
            opacity: 0.9,
            justifyContent:'center'
        }}
        sourceObj={{ image: props.person.profileImage }}
        onPress={() => {
          props.navigation && props.navigation.navigate("HostProfile", { person: props.person } )
        }}
      />
        <Text style={{
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: 12,
          lineHeight: 14,
          letterSpacing: 1,
          color: "#E0E0E0",
          marginTop: 10,
          height: 28,
          textAlign: "center",
          fontFamily: "WorkSansMedium",
          opacity: 0.85,
        }}>{props.person.fullName}</Text>
    </View>
  );
};

export default PeopleCard;
