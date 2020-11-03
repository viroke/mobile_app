import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import UploadImage from "./uploadImage.js";
import { CustomTextInput, CustomTextInputWithIcon } from "./CustomFormElements";
import { Col, Grid } from "react-native-easy-grid";
import { Button } from 'react-native-paper';
// import DatePicker from 'react-native-date-picker'

const CreateOrUpdateSession = (props) => {

    const [title, setTitle] = useState(props.event.title);
    const [ticketPrice, setTicketPrice] = useState(props.event.ticketPrice);
    const [maxGuests, setMaxGuests] = useState(props.event.maxGuests);
    const [eventDate, setEventDate] = useState(props.event.eventDate);
    const [eventTime, setEventTime] = useState(props.event.eventTime);
    const [eventImages, setEventImages] = useState(props.event.eventImages);
    
      const [date, setDate] = useState(new Date())

    useEffect(() => {

    }, [])
    return (
        <View style={{ margin: 20 }}>
            <UploadImage 
                style={{ marginBottom: 20, opacity: 0.9, alignItems: 'center' }}
                imageUri={props.eventImages && props.eventImages[0]}
                onUploadComplete={imageProps => setEventImages([imageProps])}
            />
            <CustomTextInput value={title} onChangeText={ text => setTitle(text)} placeholder={'Give your session a name.'} style={{ textAlign: 'left', width: '100%', height: '12%' }} selectTextOnFocus={true} keyboardType={'default'} multiline={false} numberOfLines={1}/>
            <Grid>
                <Col size={40}>
                    <CustomTextInput onChangeText={ text => setTicketPrice(text)} value={ticketPrice} selectTextOnFocus={true} placeholder={'Ticket Price'} style={{ marginTop: 15, marginRight: 10,  textAlign: 'left' }} keyboardType={'numeric'}/>
                </Col>
                <Col size={60}>
                    <CustomTextInput onChangeText={ text => setMaxGuests(text)} value={maxGuests} selectTextOnFocus={true} placeholder={'No. of tickets'} style={{ marginTop: 15, textAlign: 'left' }} keyboardType={'numeric'}/>
                </Col>
            </Grid>
            <Grid>
                <Col size={55}>
                    <CustomTextInput value={eventDate} onChangeText={ text => setEventDate(text)} placeholder={'Date'} style={{ marginTop: 15, marginRight: 10,  textAlign: 'left' }} keyboardType={'numeric'} numberOfLines={1}/>
                </Col>
                <Col size={45}>
                    {/* <CustomTextInput value={eventTime} onChangeText={ text => setEventTime(text)} placeholder={'Time'} style={{ marginTop: 15, marginBottom: 15,  textAlign: 'left' }} keyboardType={'numeric'} numberOfLines={1}/> */}
                </Col>
            </Grid>
            <Button 
                mode="contained"
                style={{
                    marginTop: 20,
                    backgroundColor: "#2F80ED",
                    height: 50,
                    justifyContent: 'center',
                }}
                contentStyle={{ height: 50 }}>
                <Text style={{textTransform: "capitalize", textAlign: 'center', fontSize: 18 }}>{(props.id || props.title) ? "Save" : "Create"}</Text>
            </Button>
        </View>
    )
};

export default CreateOrUpdateSession;