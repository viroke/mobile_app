import * as React from "react";
import styles from "../styles";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";

const FlatCard = (props) => {
  viewMarginRight = props.viewMarginRight || 6;
  return (
    <View style={{ marginRight: viewMarginRight }}>
      <Card.Cover
        source={{ uri: props.cardCoverImage }}
        style={{ ...styles.image, ...styles.overlay, borderRadius: 5 }}
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
