import { configure, observable, action, toJS, runInAction } from "mobx";
import { setClassProps, isEmpty } from "../utils/helpers";
import * as AuthenticationAPI from "../api/authentication";
import Storage from "../common/storage";
import userService from "../services/userService";
import paymentService from "../services/payments";

// Store for Managing Application Componenents
export default class ApplicationStore {
  @observable toast = false;
  @observable homeScreen = {
    isRefreshing: false,
  };

  @observable payoutBanks = null;
  @observable availableBanks = [];
  @observable loadingBanks = false;

  @action
  loadPayoutBanks = async () => {
    this.loadingBanks = true;
    this.payoutBanks = await userService.payoutBanks();
    this.loadingBanks = true;
  }

  @action
  loadAvailableBanks = async () => {
    if(this.availableBanks.length < 1) this.availableBanks = await paymentService.getAvailableBanks();
    return this.availableBanks;
  }

  @observable injectedStores = {
    UIStore: null,
    AuthenticationStore: null,
  };


  @action
  setClassProps = (arr, self = this) => setClassProps(arr, self);
}
