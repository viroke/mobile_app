import React, { Component, useEffect, useState, Suspense, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  RefreshControl
} from "react-native";
import { Button, ActivityIndicator, List, Divider } from 'react-native-paper';
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

const WalletScreen = observer (
  class WalletScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      bankFilterQuery: "",
      refreshing: false,
      allBanks: [],
      selectedBank: null,
      bankCode: null
    }
    this.modalRef = React.createRef();
    this.selectBankModalRef = React.createRef();
    this.transactionModalRef = React.createRef();

    this.showTransactionModal = this.showTransactionModal.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.filterDisplayedBanks = this.filterDisplayedBanks.bind(this);
    this.shouldResolveAccountDetails = this.shouldResolveAccountDetails.bind(this);
    this.setSelectedBank = this.setSelectedBank.bind(this);
  }

  toggleModal(){
    if(this.modalRef.current) this.modalRef.current.open();
  }

  showSelectBankModal(){
    this.props.stores.ApplicationStore.loadPayoutBanks();
    if(this.selectBankModalRef.current) this.selectBankModalRef.current.open();
  }

  async loadPageData() {
    await this.props.stores.ApplicationStore.loadPayoutBanks();
    await this.props.stores.AuthenticationStore.refreshCurrentUser();
  }
  
  async componentDidMount() {
    this.loadPageData();
    let availableBanks = await this.props.stores.ApplicationStore.loadAvailableBanks();
    this.setState({ allBanks: availableBanks });
  }

  showTransactionModal(){
    if(this.transactionModalRef.current) this.transactionModalRef.current.open();
  }

  async onRefresh() {
    this.setState({ refreshing: true });
    await this.loadPageData();
    this.setState({ refreshing: false });
  }

  filterDisplayedBanks (text) {
    this.setState({
      allBanks: (text.length < 1) ? 
        this.props.stores.ApplicationStore.availableBanks 
          : this.state.allBanks.filter( bank => 
            bank.bankName 
              && bank.bankName.toLowerCase()
                  .includes(text.toLowerCase()))
    });
  }

  setSelectedBank(bank) { 
    this.shouldResolveAccountDetails({ 
      bankCode: bank.bankCode,
      bankName: bank.bankName
    });

    this.setState({ 
      selectedBank: bank,
      bankCode: bank.bankCode,
      bankName: bank.bankName
    }, () => {
      this.selectBankModalRef && this.selectBankModalRef.current && this.selectBankModalRef.current.close();
    });
  }

  shouldResolveAccountDetails(bank) {
    console.log("running shouldResolveAccountDetails");
    // this.setState({ selectedBankInfo: bank });
    let params = {
      bankCode: this.state.bankCode,
      bankName: this.state.bankName,
      accountNumber: this.state.inputBankAccountNumber,
    }

    // let params = bank || 
    let isValidToSend = params.bankCode && params.accountNumber && params.accountNumber.length === 10;
    console.log({ params, isValidToSend, selectedBankInfo: this.state.selectedBankInfo })
  }
  render() {
      return (
          <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={styles.container} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}>
            {this.state.refreshing ? <ActivityIndicator animating={true} color={'#828282'} style={{paddingBottom: 10}}/> : null }
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
                        <Text>&#8358;</Text>{this.props.stores.AuthenticationStore.currentUser.wallet.amount}
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
                    this.toggleModal();
                }}
                style={{
                    elevation: 0,
                    backgroundColor: "#202730",
                }}>
                    <Text style={{color: "#B9D7FF", fontSize: 14, fontFamily: "WorkSansMedium", textTransform: 'none'}}>Add bank </Text>
            </Button>
              </View>
              { this.props.stores.ApplicationStore.payoutBanks ? 
                <Fragment>
                  { this.props.stores.ApplicationStore.payoutBanks.length > 0 ? 
                    <ScrollView style={{ flexDirection: "row" }}
                      scrollEventThrottle={16}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                        {this.props.stores.ApplicationStore.payoutBanks.map( bank => <BankInfoCard {...bank} key={bank.id}/>)}
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
                      height: height / 7
                    }}>You do not have any bank connected </Text>}
                </Fragment>
                : <Text style={{
                      color: "#949494", 
                      fontSize: 14, 
                      fontFamily: "WorkSansMedium", 
                      textTransform: 'none', 
                      textAlign: 'center',
                      marginTop: 20,
                      height: height / 7
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
              <Transactions showTransactionModal={this.showTransactionModal}/>
            </View>

            <Modalize
                ref={this.modalRef}
                modalStyle={{ backgroundColor: "#18191D" }}
                modalHeight={400}
                HeaderComponent={<ModalHeader text={"Add Bank"}/>}
                keyboardShouldPersistTaps={true}
            >
              <View style={{ padding: 20}}>
                <CustomTextInput placeholder={'Enter Account number'} maxLength={10} keyboardType={'number-pad'} onChangeText={text => this.setState({ inputBankAccountNumber: text })} style={{ marginTop: 20, fontSize: 20, fontFamily: "WorkSansMedium" }}/>
                <Button 
                    mode="contained"
                    onPress={() => {
                      this.showSelectBankModal()
                    }}
                    style={{
                        backgroundColor: "#2A2B31",
                        marginTop: 20,
                        padding: 0
                    }}
                    contentStyle={{ height: 50 }}>
                        <Text style={{color: "#BDBDBD", width: 300, margin: 0, height: 50, fontSize: 20, fontFamily: "WorkSansMedium", textTransform: 'none'}}>{(this.state.selectedBank && this.state.selectedBank.bankName) || "Select Your Bank"} </Text>
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
                ref={this.selectBankModalRef}
                modalStyle={{ backgroundColor: "#18191D" }}
                modalHeight={400}
                HeaderComponent={ props => (
                  <View style={{ marginBottom: 10, padding: 10 }}>
                    <ModalHeader text={"Select Your Bank"}/>
                    <CustomTextInput placeholder={'Type to search...'} onChangeText={this.filterDisplayedBanks} style={{ marginTop: 20, textAlign: 'left', }}/>
                  </View>
                )}
                keyboardShouldPersistTaps={true}
            >
              <View style={{ padding: 5}}>
                <ScrollView style={{
                  backgroundColor: "white",
                  padding: 10,
                  }}>
                    { this.state.allBanks.map( bank => {
                      return (
                        <View>
                          <TouchableOpacity 
                            key={bank.bankCode}
                            onPress={ _ => this.setSelectedBank(bank)}
                            style={{ margin: 10, justifyContent: 'center', alignItems: 'left' }}
                          >
                              <Text style={{ fontFamily: "WorkSansSemiBold", fontSize: 18 }}>{bank.bankName}</Text>
                          </TouchableOpacity>
                          <Divider />
                        </View>
                      )
                    })}
                </ScrollView>
              </View>
            </Modalize>

            <Modalize
                ref={this.transactionModalRef}
                flatListProps={{
                  data: [{ id: "Tranz1"}, { id: "Tranz2"}, { id: "Tranz3"}, { id: "Tranz4"}, { id: "Tranz5"}, { id: "Tranz6"}, { id: "Tranz7"}, { id: "Tranz8"}, { id: "Tranz9"}, { id: "Tranz11"}, { id: "Tranz12"}, { id: "Tranz111"}, { id: "Tranz9"}, { id: "Tranz11"}, { id: "Tranz12"}, { id: "Tranz111"}],
                  renderItem: SingleTransaction,
                  keyExtractor: item => item.heading,
                  showsVerticalScrollIndicator: true
                }}
                modalHeight={400}
                HeaderComponent={<ModalHeader text={"All Transactions"} color={'black'} />}
            />
            </ScrollView>
          </SafeAreaView>
      )
  }
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