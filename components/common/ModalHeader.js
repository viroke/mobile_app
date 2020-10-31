import React from "react";
import { View, Text } from 'react-native';

const ModalHeader = ({ text }) => (
    <View>
        <Text style={{ textAlign: 'center', fontSize: 21, fontFamily: "WorkSansSemiBold", padding: 10, color: '#BDBDBD'}}>{text}</Text>
    </View>
);

export default ModalHeader;
