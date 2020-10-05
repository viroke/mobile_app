import AuthenticationStoreClass from "./AuthenticationStore";
import UIStoreClass from "./UIStore";
import ApplicationStoreClass from "./ApplicationStore";

const AuthenticationStore = new AuthenticationStoreClass();
const UIStore = new UIStoreClass();
const ApplicationStore = new ApplicationStoreClass();

export default {
  AuthenticationStore,
  UIStore,
  ApplicationStore,
};
