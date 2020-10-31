import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import IconTextInput from './IconTextInput/IconTextInput'; 

console.log({ IconTextInput })
export function CustomTextInput(props) {

    return (
        <TextInput
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor || '#BDBDBD'}
            onChangeText={props.onChangeText}
            autoCapitalize="none"
            style={{
                ...styles.inputStyle,
                ...props.style
            }}
            secureTextEntry={props.secureTextEntry}
            icon={props.icon}
            keyboardType={props.keyboardType || 'default'}
            multiline={props.multiline}
            editable={props.editable}
            autoCorrect={props.autoCorrect || false}
            maxLength={props.maxLength}
        />
    )
}

export function CustomTextInputWithIcon(props) {

    return (
        <IconTextInput
            value={props.value}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor || '#BDBDBD'}
            onChangeText={props.onChangeText}
            autoCapitalize="none"
            inputStyle={{
                ...styles.inputStyle,
                ...props.style
            }}
            containerStyles={{
                backgroundColor: "#2A2B31",
                borderRadius: 5 
            }}
            iconStyle={props.icon}
            secureTextEntry={props.secureTextEntry}

        />
    )
}

export function CustomCheckBox(props){
    
    
}

const styles = StyleSheet.create({
    inputStyle: {
        color: "#BDBDBD", 
        height: 48, 
        backgroundColor: "#2A2B31", 
        textAlign: 'center',
        borderRadius: 5,
        fontFamily: "WorkSansMedium",
        fontSize: 18,
        paddingLeft: 40,
        paddingRight: 40
    }
});