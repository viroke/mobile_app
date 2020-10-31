import * as React from "react";
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { observer } from "mobx-react-lite"

function HeaderRight(props){
    const navigation = useNavigation();
    return (
        <View>
            <Button 
                mode="contained"
                onPress={() => console.log("want to fund wallet")}
                style={{
                    backgroundColor: "#202730",
                    marginRight: 15
                }}>
                <Text style={{textTransform: "capitalize", color: "#B9D7FF"}}>{"Fund Wallet"}</Text>
            </Button>
        </View>
    )
}

export default function Header(title, Stores = {}) {
    let {AuthenticationStore} = Stores;
    return ({
        title: "",
        headerRight: (props) => ( AuthenticationStore && !AuthenticationStore.isAuthed ? null : <HeaderRight {...props} />),
        headerLeft: props => <Text style={{
              height: 28,
              fontStyle: "normal",
              fontSize: 24,
              letterSpacing: 0.9,
              lineHeight: 28,
              color: "#D3D3D3",
              fontFamily: "WorkSans",
              marginLeft: 7
        }}> {title} </Text>,
        headerStyle: {
            backgroundColor: '#18191D',
            borderColor: '#18191D',
            shadowColor: 'transparent'
        }
    });
}