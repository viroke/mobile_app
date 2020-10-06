import * as React from "react";
import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function HeaderRight(props){
    const navigation = useNavigation();
    return (
        <View>
            <Button 
                mode="contained"
                icon="camera"
                onPress={() => navigation.navigate('StartLive')}
                style={{
                    backgroundColor: "red",
                    marginRight: 15
                }}>
                <Text style={{textTransform: "capitalize"}}>{"Go Live"}</Text>
            </Button>
        </View>
    )
}
export default function Header(title) {
    return ({
        headerRight: (props) => <HeaderRight {...props} />,
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