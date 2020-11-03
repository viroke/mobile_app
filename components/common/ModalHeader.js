import React from "react";
import { View, Text } from 'react-native';

const ModalHeader = ({ text }) => (
    <View style={{ margin: 10 }}>
        <Text style={{ textAlign: 'center', fontSize: 21, fontFamily: "WorkSansSemiBold", padding: 10, color: '#BDBDBD'}} ellipsizeMode='tail' numberOfLines={1}>{text}</Text>
    </View>
);

export default ModalHeader;
