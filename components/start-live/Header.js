import * as React from "react";
import { Text, View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import logo from "../../assets/logo/favicon2x.png";

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
export default function Header(title) {
    return ({
        title: "",
        headerRight: (props) => <HeaderRight {...props} />,
        headerLeft: props => <Image style={{
                height: 10,
                width: 67,
              marginLeft: 7
        }} source={logo} />,
        headerStyle: {
            backgroundColor: '#18191D',
            shadowColor: 'transparent',
            height: 100
        }
    });
}