import * as React from "react";
import styles from "../styles";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import ImageLoader from '../../common/ImageLoader';

const FlatCard = (props) => {
  viewMarginRight = props.viewMarginRight || 6;
  return (
    <View style={{ marginRight: viewMarginRight }}>
      <ImageLoader
        style={{ ...styles.image, ...styles.overlay, borderRadius: 5, }}
        sourceObj={{ image: props.cardCoverImage }}
        onPress={() => {
          console.log({ props })
        }}
      />
      <Text
        style={{
          ...styles.text,
          backgroundColor: "#131212e0",
          padding: 3,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
          top: 65,
          width: 169,
          left: 0,
          right: 0,
        }}
      >
        {props.cardCoverText}
      </Text>
    </View>
  );
};

export default FlatCard;
