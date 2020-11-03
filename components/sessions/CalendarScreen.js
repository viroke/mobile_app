import * as React from "react";
import { Text, View, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import {Agenda} from 'react-native-calendars';
const { width, height } = Dimensions.get("window");
import Moment from 'moment';
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);
import { Col, Grid, Row } from "react-native-easy-grid";
import { Feather } from "@expo/vector-icons";
import CreateOrUpdateSession from "../common/CreateOrUpdateSession";
import { Modalize } from 'react-native-modalize';
import ModalHeader from "../common/ModalHeader.js";

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      selectedEvent: {}
    };
    this.editModalRef = React.createRef();
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
            <Agenda
                items={this.state.items}
                loadItemsForMonth={this.loadItems.bind(this)}
                selected={'2020-10-31'}
                renderItem={this.renderItem.bind(this)}
                renderEmptyDate={this.renderEmptyDate.bind(this)}
                rowHasChanged={this.rowHasChanged.bind(this)}
                renderEmptyData = {this.renderEmptyData.bind(this)}
                theme={{
                    calendarBackground: "#18191D",
                    arrowColor: "#D3D3D3",
                    dotColor: "#D3D3D3",
                    selectedDayBackgroundColor: "#202730",
                    agendaTodayColor: "#2F80ED",
                    dayTextColor: "#949494",
                    'stylesheet.agenda.list': {
                        container: {
                            backgroundColor: "#18191D",
                            flexDirection: 'row',
                        },
                        day: {
                            backgroundColor: "#18191D",
                            width: 63,
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            marginTop: 32
                        }
                    }
                }}
            />
            <Modalize
                    ref={this.editModalRef}
                    modalStyle={{ backgroundColor: "#18191D" }}
                    modalHeight={480}
                    HeaderComponent={<ModalHeader text={ this.state.selectedEvent.title || "Create Live"}/>}
                    keyboardShouldPersistTaps={true}
                >
                <CreateOrUpdateSession event={this.state.selectedEvent}/>
            </Modalize>
        </View>
    );
  }

  loadItems(day) {
    let extraDays = this.addExtraDays();
    setTimeout(() => {
      this.setState({
        items: {
            ...extraDays,
            '2020-10-22': [{ title: 'Cardi\'s special night!', eventTime: '10:12pm', ticketPrice: "75", ticketSold: "500", eventDate: "2020-10-22" }],
            '2020-10-30': [{title: 'How to make a clear studio recording on my ownn',  eventTime: '02:00am', ticketPrice: "375", ticketSold: "600", eventDate: "2020-10-30" }, {title: 'Understanding the guitar',  eventTime: '09:30pm', ticketPrice: "300", ticketSold: "210", eventDate: "2020-10-30"}],
            '2020-10-31': [{title: 'Making it a worthy night',  eventTime: '11:12pm', ticketPrice: "200", ticketSold: "870", eventDate: "2020-10-31"}],
            '2020-11-03': [{title: 'How I started.', eventTime: '10:00pm', ticketPrice: "150", ticketSold: "2400", eventDate: "2020-11-04"}],
            '2020-11-04': [],
        }
      });
    }, 1000);
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.item]} 
        onPress={() => this.renderEditModal(item)}
      >
        <Row size={100} style={{ justifyContent: 'space-between'}}>
            <Text>{item.title}</Text>
        </Row>
        <Grid>
            <Col size={60}>
                <Text><Feather
                  name='watch'
                  size={13}
                  color="#CDCCCE"
                />{" "}{item.time}</Text>
            </Col>
            <Col size={20}>
                <Text>
                <Feather
                  name='users'
                  size={13}
                  color="#CDCCCE"
                />{" "}{item.ticketSold}</Text>
            </Col>
            <Col size={20}>
                <Text>
                <Feather
                  name='tag'
                  size={13}
                  color="#CDCCCE"
                />{" "}{item.ticketPrice}</Text>
            </Col>
        </Grid>
      </TouchableOpacity>
    );
  }


  renderEditModal(selectedEvent) {
    this.setState({ selectedEvent });
    this.editModalRef.current.open();
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text style={{
            color: "#949494", 
            fontSize: 14, 
            fontFamily: "WorkSansMedium", 
            textTransform: 'none', 
            textAlign: 'center',
            marginTop: 20,
            height: height / 7
        }}>No Sessions created for this day. </Text>
      </View>
    );
  }

  genDate(startDate, endDate, addFn, interval) {
    addFn = addFn || Date.prototype.addDays;
    interval = interval || 1;
    var retVal = [];
    var current = new Date(startDate);
    while (current <= endDate) {
        retVal.push(new Date(current));
        current = addFn.call(current, interval);
    }
    return retVal;
  }

  addExtraDays(dur) {
    let sevenDaysFromNow = moment().add(7, 'days');
    const range = moment.range(moment(new Date()), moment(sevenDaysFromNow));
    let obj = {};
    let oneWeekRange = Array.from(range.by('day'));
    oneWeekRange.map( day => {
        obj[day.format("YYYY-MM-DD")] = [];
        return day;
    });
    return obj
  }

  renderEmptyData() {
    return (
      <View style={styles.emptyDate}>
        <Text style={{
            color: "#949494", 
            fontSize: 14, 
            fontFamily: "WorkSansMedium", 
            textTransform: 'none', 
            textAlign: 'center',
            marginTop: 20,
            height: height / 7
        }}>You have not created any live sessions yet. </Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
  agenda: {
    backgroundColor: "#18191D"
  }
});