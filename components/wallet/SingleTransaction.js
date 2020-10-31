import * as React from 'react';
import {
  Text,
  View
} from "react-native";
import { Button } from 'react-native-paper';
import { Col, Grid } from "react-native-easy-grid";

const SingleTransaction = (props) => {
    return (
        <View style={{ padding: 5, borderRadius: 5, marginBottom: 10, marginTop: 5 }}>
            <Grid>
                <Col size={15} style={{ alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text>03</Text>
                    <Text>May</Text>
                </Col>
                <Col size={70} style={{ justifyContent: 'space-between'}}>
                    <Text style={{ fontSize: 16}}>Funded Wallet</Text>
                    <Text style={{ fontSize: 11}}>Successful</Text>
                </Col>
                <Col size={15} style={{ alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text>N1200</Text>
                    <Text>debit</Text>
                </Col>
            </Grid>
        </View>
    );
};

export default SingleTransaction;