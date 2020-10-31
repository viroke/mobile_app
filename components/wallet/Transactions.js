import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import { Button } from 'react-native-paper';
import { Col, Grid } from "react-native-easy-grid";
import SingleTransaction from './SingleTransaction';
import Modal, { BottomModal, ModalContent, ModalTitle } from 'react-native-modals';
const { width, height } = Dimensions.get("window");
import { Modalize } from 'react-native-modalize';

const Transactions = (props) => {
    const modalizeRef = React.useRef(null);
    const toggleModal = () => {
        // if(modalizeRef.current) modalizeRef.current.open();
        if(props.showTransactionModal) props.showTransactionModal();
    };
    const ModalHeader = () => (
        <View>
            <Text style={{ textAlign: 'center', fontSize: 21, fontFamily: "WorkSansSemiBold", padding: 10}}>All Transactions</Text>
        </View>
    );
    return (
        <View style={{ backgroundColor: "#FFFFFF" }}>
            <ScrollView onScroll={() => toggleModal()} scrollEventThrottle={16} style={{ height: height / 3}}>
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
                <SingleTransaction />
            </ScrollView>
                <Modalize
                    ref={modalizeRef}
                    flatListProps={{
                    data: [{ id: "Tranz1"}, { id: "Tranz2"}, { id: "Tranz3"}, { id: "Tranz4"}, { id: "Tranz5"}, { id: "Tranz6"}, { id: "Tranz7"}, { id: "Tranz8"}, { id: "Tranz9"}, { id: "Tranz11"}, { id: "Tranz12"}, { id: "Tranz111"}, { id: "Tranz9"}, { id: "Tranz11"}, { id: "Tranz12"}, { id: "Tranz111"}],
                        renderItem: SingleTransaction,
                        keyExtractor: item => item.heading,
                        showsVerticalScrollIndicator: true
                    }}
                    modalHeight={400}
                    HeaderComponent={<ModalHeader />}
                />
        </View>
    );
};

export default Transactions;