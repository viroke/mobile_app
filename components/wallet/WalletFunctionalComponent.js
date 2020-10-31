import React, { useEffect, useState, useRef, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Button } from 'react-native-paper';
import { inject, observer } from "mobx-react";
import { Entypo } from "@expo/vector-icons";
import BankInfoCard from './BankInfoCard';
import Transactions from './Transactions';
import { Modalize } from 'react-native-modalize';
import { CustomTextInput } from "../common/CustomFormElements";
import SingleTransaction from './SingleTransaction';

const { width, height } = Dimensions.get("window");

const ModalHeader = ({ text, color = "#BDBDBD" }) => (
    <View>
        <Text style={{ textAlign: 'center', fontSize: 21, fontFamily: "WorkSansSemiBold", padding: 10, color }}>{text}</Text>
    </View>
);

const WalletScreen = observer((props) => {
  const modalRef = useRef();
  const selectBankModalRef = useRef();
  const transactionModalRef = useRef();
  const [selectedBank, setSelectedBank] = useState();

  useEffect(() => {
    props.stores.ApplicationStore.loadPayoutBanks();
    props.stores.ApplicationStore.loadAvailableBanks();
  }, []);

  const toggleModal = () => {
    if(modalRef.current) modalRef.current.open();
  }

  const showSelectBankModal = () => {
    if(selectBankModalRef.current) selectBankModalRef.current.open();
  }

  function showTransactionModal(){
    if(transactionModalRef.current) transactionModalRef.current.open();
  }

  return (
      <View style={styles.container}>
        <View style={{ 
                backgroundColor: "white", 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                borderRadius: 10
            }}>
            <View style={{ margin: 10, marginTop: 30 }}>
                <Text style={{ fontSize: 14, fontFamily: 'WorkSansLight' }}> Balance </Text>
                <Text style={styles.walletBalance}>
                    <Text>&#8358;</Text>{props.stores.AuthenticationStore.currentUser.wallet.amount}
                </Text>
                <Text style={{
                    fontSize: 12,
                    fontFamily: "WorkSansSemiBold",
                    color: "#828282",
                    marginTop: 5,
                    marginBottom: 5
                }}> 10,375 total views. </Text>
            </View>

            <TouchableOpacity style={{ margin: 20, alignItems: 'center' }} onPress={() => console.log("withdrawing")}>
                <Entypo name="wallet" size={22} color="#2F80ED"  />

                <Text style={{color: "#2F80ED", fontSize: 14, fontFamily: "WorkSansLight"}}> Withdraw </Text>
            </TouchableOpacity>
        </View>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', marginBottom: 20}}>
            <Text style={{color: "#DADADA", fontSize: 20, fontFamily: "WorkSansMedium", textTransform: 'none'}}> Payout Banks </Text>
            <Button 
            mode="contained"
            onPress={() => {
                // load banks list
                toggleModal();
            }}
            style={{
                elevation: 0,
                backgroundColor: "#202730",
            }}>
                <Text style={{color: "#B9D7FF", fontSize: 14, fontFamily: "WorkSansMedium", textTransform: 'none'}}>Add bank </Text>
        </Button>
          </View>
          { props.stores.ApplicationStore.payoutBanks ? 
            <Fragment>
              { props.stores.ApplicationStore.payoutBanks.length > 0 ? 
                <ScrollView style={{ flexDirection: "row" }}
                  scrollEventThrottle={16}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                    {props.stores.ApplicationStore.payoutBanks.map( bank => <BankInfoCard {...bank} key={bank.id}/>)}
                    <BankInfoCard />
                </ScrollView>
                :
              <Text style={{
                  color: "#949494", 
                  fontSize: 14, 
                  fontFamily: "WorkSansMedium", 
                  textTransform: 'none', 
                  textAlign: 'center',
                  marginTop: 20,
                  height: height / 3
                }}>You do not have any bank connected </Text>}
            </Fragment>
            : <Text style={{
                  color: "#949494", 
                  fontSize: 14, 
                  fontFamily: "WorkSansMedium", 
                  textTransform: 'none', 
                  textAlign: 'center',
                  marginTop: 20,
                  height: height / 3
                }}>Loading banks... </Text>}
        </View>

        <View style={{flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between', marginBottom: 20}}>
            <Text style={{color: "#DADADA", fontSize: 20, fontFamily: "WorkSansMedium", textTransform: 'none'}}> Transaction History </Text>
            {/* <Button 
            mode="contained"
            onPress={() => console.log("want to fund wallet")}
            style={{
                backgroundColor: "#202730",
            }}>
              <Text style={{color: "#B9D7FF", fontSize: 14, fontFamily: "WorkSansMedium", textTransform: 'none'}}>Statement</Text>
              </Button> */}
          </View>
          <Transactions showTransactionModal={showTransactionModal}/>
        </View>

        <Modalize
            ref={modalRef}
            modalStyle={{ backgroundColor: "#18191D" }}
            modalHeight={400}
            HeaderComponent={<ModalHeader text={"Add Bank"}/>}
            keyboardShouldPersistTaps={true}
        >
          <View style={{ padding: 20}}>
            <CustomTextInput placeholder={'Enter Account number'} style={{ marginTop: 20, fontSize: 20, fontFamily: "WorkSansMedium" }}/>
            <Button 
                mode="contained"
                onPress={() => {
                  showSelectBankModal()
                }}
                style={{
                    backgroundColor: "#2A2B31",
                    marginTop: 20,
                    padding: 0
                }}
                contentStyle={{ height: 50 }}>
                    <Text style={{color: "#BDBDBD", width: 300, margin: 0, height: 50, fontSize: 20, fontFamily: "WorkSansMedium", textTransform: 'none'}}>{(selectedBank && selectedBank.name) || "Select Your Bank"} </Text>
            </Button>

            <View style={{ margin: 20 }}>
              <Text style={{color: "#BDBDBD", fontSize: 20, fontFamily: "WorkSansMedium", textTransform: 'uppercase', textAlign: 'center'}}> Williams Isaac </Text>
            </View>
            <Button
              mode="contained"
              style={{
                backgroundColor: "#4EAFFF",
                // padding: 10,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
              }}
              >
                <Text style={{ textTransform: "none", fontSize: 20, fontFamily: "WorkSansMedium" }}>Save</Text>
            </Button>
          </View>
        </Modalize>

        <Modalize
            ref={selectBankModalRef}
            modalStyle={{ backgroundColor: "#18191D" }}
            modalHeight={400}
            HeaderComponent={<ModalHeader text={"Select Your Bank"}/>}
            keyboardShouldPersistTaps={true}
        >
          <View style={{ padding: 20}}>
            <CustomTextInput placeholder={'Type to search...'} style={{ marginTop: 20, textAlign: 'left', }}/>
            
          </View>
        </Modalize>

        <Modalize
            ref={transactionModalRef}
            flatListProps={{
              data: [{ id: "Tranz1"}, { id: "Tranz2"}, { id: "Tranz3"}, { id: "Tranz4"}, { id: "Tranz5"}, { id: "Tranz6"}, { id: "Tranz7"}, { id: "Tranz8"}, { id: "Tranz9"}, { id: "Tranz11"}, { id: "Tranz12"}, { id: "Tranz111"}, { id: "Tranz9"}, { id: "Tranz11"}, { id: "Tranz12"}, { id: "Tranz111"}],
              renderItem: SingleTransaction,
              keyExtractor: item => item.heading,
              showsVerticalScrollIndicator: true
            }}
            modalHeight={400}
            HeaderComponent={<ModalHeader text={"All Transactions"} color={'black'} />}
        />
      </View>
  )
})

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18191D',
    padding: 10
  },
  walletBalance: {
    fontSize: 35,
    fontWeight: '700',
    marginLeft: 3,
    // fontFamily: "WorkSansSemiBold"
  }
});