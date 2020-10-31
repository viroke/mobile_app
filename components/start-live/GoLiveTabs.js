import React, { useEffect, useState, Fragment } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Share
} from "react-native";
import { Button } from 'react-native-paper';
import { CustomTextInput } from "../common/CustomFormElements";
import { AntDesign } from '@expo/vector-icons'; 
import { SimpleAnimation } from 'react-native-simple-animations';

const Instant = (props) => {
    let mockUrl = 'https://live.viroke.io/90930-28938KW';

  return (
      <SimpleAnimation delay={0} duration={1000} fade staticType={props.noAnimate ? null: 'zoom'} movementType={props.noAnimate ? null :'slide'}>
        <View style={[{}]}>
            <CustomTextInput placeholder={`Enter Amount`} value={props.ticketPrice} style={{ textAlign: 'center' }} keyboardType={'numeric'}/>
            <Button 
                mode="contained"
                icon='wifi'
                onPress={() => {
                    props.completeLiveSetup({url: mockUrl});
                }}
                contentStyle={{ height: 50 }}
                style={{ justifyContent: 'center', marginTop: 20, backgroundColor: "#2F80ED" }}>
                <Text style={{ textTransform: "none", fontSize: 16 }}>{"Broadcast"}</Text>
            </Button>
        </View>
    </SimpleAnimation>
  )
};

const Scheduled = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default function GoLiveTabs(props) {
    let [activeTab, setActiveTab] = useState('instant');
    let [linkGenerated, setLinkGenerated] = useState();
    let [noAnimate, setNoAnimate] = useState(false);
    
    const completeLiveSetup = (data = {}) => {
        let { url } = data;
        setLinkGenerated(url)
    };

    useEffect(() => {
        setTimeout(() => {
            setNoAnimate(true);
        }, 1000);
        return () => {};
    }, []);

    const onShare = async () => {
        try {
            const result = await Share.share({
                url: linkGenerated,
                message: linkGenerated,
            });
            console.log({ result })
            // if (result.action === Share.sharedAction) {
            //     if (result.activityType) {
            //         // shared with activity type of result.activityType
            //     } else {
            //         // shared
            //     }
            // } else if (result.action === Share.dismissedAction) {
            //     // dismissed
            // }
        } catch (error) {
            alert(error.message);
        }
    };
  return (
    <Fragment>
        <View style={{ padding: 10 }}>
            {/* Link Generation View */}
            { linkGenerated ? 
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <SimpleAnimation delay={100} duration={500} fade staticType='zoom' movementType='slide'>
                            <AntDesign name="checkcircleo" size={75} color="#BDBDBD" style={{ margin: 30 }}/>
                        </SimpleAnimation>
                        <CustomTextInput editable={false} value={linkGenerated} multiline={true} numberOfLines={2} style={{ textAlign: 'left', textAlignVertical: 'top' }}/>
                        
                        <View style={{ flex: 1 , flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Button 
                                mode="contained"
                                icon='share'
                                onPress={onShare}
                                contentStyle={{ height: 50 }}
                                style={{ justifyContent: 'center', marginTop: 20, backgroundColor: "#2F80ED",  width: "40%", marginRight: 20 }}>
                                <Text style={{ textTransform: "none", fontSize: 16 }}>{"Share"}</Text>
                            </Button>
                            <Button 
                                mode="contained"
                                icon='video'
                                onPress={() => {
                                    setActiveTab('instant')
                                }}
                                contentStyle={{ height: 50 }}
                                style={{ justifyContent: 'center', marginTop: 20, backgroundColor: "#D95148", width: "40%" }}>
                                <Text style={{ textTransform: "none", fontSize: 16 }}>{"Start"}</Text>
                            </Button>
                        </View>
                    </View>
                
            : 
                <View>
                    <View style={{ flex: 1 , flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20, paddingLeft: 20 }}>
                        <Button 
                            mode="contained"
                            onPress={() => {
                                setActiveTab('instant')
                            }}
                            contentStyle={{ height: styles.tabButtons.height }}
                            style={[styles.tabButtons, activeTab === 'instant' ? styles.activeTabButton : null ]}>
                            <Text style={[styles.tabHeaderText]}>{"Instant"}</Text>
                        </Button>

                        <Button 
                            mode="contained"
                            onPress={() => {
                                setActiveTab('scheduled')
                            }}
                            contentStyle={{ height: styles.tabButtons.height }}
                            style={[styles.tabButtons, activeTab === 'scheduled' ? styles.activeTabButton : null ]}>
                            <Text style={[styles.tabHeaderText]}>{"Scheduled"}</Text>
                        </Button>
                    </View>
                    
                    <View style={{ flex: 1, padding: 20 }}>
                        { activeTab === 'instant' ? <Instant {...props} completeLiveSetup={completeLiveSetup} noAnimate={noAnimate} /> : <Scheduled {...props} completeLiveSetup={completeLiveSetup}/>}
                    </View>
                </View>
            }
        </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
    activeTabButton: {
        backgroundColor: "#808182",
    },
    tabButtons: {
        marginTop: 20,
        backgroundColor: "#202730",
        height: 50,
        justifyContent: 'center',
        width: "48%"
    },
    tabHeaderText: {
        textTransform: "capitalize", 
        textAlign: 'center',
        fontSize: 18,
        fontFamily: "WorkSansSemiBold"
    }
});