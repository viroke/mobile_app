import { configure, observable, action, toJS, runInAction } from "mobx";
import { setClassProps, isEmpty } from "../utils/helpers";
import * as AuthenticationAPI from "../api/authentication";
import Storage from "../common/storage";

// Store for Managing Application Componenents
export default class ApplicationStore {
  @observable toast = false;
  @observable homeScreen = {
    isRefreshing: false,
  };

  @observable injectedStores = {
    UIStore: null,
    AuthenticationStore: null,
  };

  @action
  setClassProps = (arr, self = this) => setClassProps(arr, self);
}
