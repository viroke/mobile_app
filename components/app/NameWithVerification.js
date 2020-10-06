import * as React from "react";
import { Text, View, Image } from "react-native";

const NameWithVerification = (props) => {
  return (
    <View style={{
            ...(props.style || {}),
            flexDirection: 'row',
        }}>
        <Text style={props.textStyle}>{props.text}</Text>
        { props.isVerified ?
            <Image
                source={require("../../assets/images/Vector.png")}
                style={{
                    width: 25,
                    height: 25,
                    ...props.iconStyle
                }}
            />
        : null }
    </View>
  );
};

export default NameWithVerification;
