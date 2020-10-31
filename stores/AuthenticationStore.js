import { configure, observable, action, toJS, runInAction } from "mobx";
import { setClassProps, isEmpty } from "../utils/helpers";
import * as AuthenticationAPI from "../api/authentication";
import userService from "../services/userService";
import Storage from "../common/storage";

export default class AuthenticationStore {
  @observable navigation = {};
  @observable currentUser = {};
  @observable loading = false;
  @observable showPasswordInput = false;
  @observable showRegistrationInput = false;
  @observable isAuthed = false;
  @observable isReloadingUser = false;

  @observable signinCredentials = {
    email: "williamscalg@gmail.com",
    password: "password",
  };

  @observable injectedStores = {
    UIStore: null,
  };

  @action
  setClassProps = (arr, self = this) => setClassProps(arr, self);

  @action
  updateAccountDetails = async (details) => {
    this.currentUser = details;
    this.isAuthed = true;
    await Storage.set("user-account-details", this.currentUser);
    return this.currentUser;
  };

  @action
  handleUserAuthenticationRequestComplete = async (fullResponse, autonavigate) => {
    let { code, data = {}, error } = (fullResponse && fullResponse.data) || {};
    let { bearerToken, expiresIn, user } = data;
    let isSuccess = !error && bearerToken;
    if (isSuccess) {
      await Storage.set("api-access-token", bearerToken);
      await Storage.set("api-access-token-expiry", expiresIn);
      this.updateAccountDetails(user);
    }
    let message =
      AuthenticationAPI.AUTHENTICATION_ERROR_MAP[code] ||
      "Unknown error occured.";
    this.injectedStores.UIStore && this.injectedStores.UIStore.notify(message);
    this.loading = false;

    if (isSuccess && autonavigate && this.navigation) return this.navigation.navigate("Home");
    return user;
  };

  @action
  onVerifyEmailComplete = ({ exists, message }) => {
    this.showPasswordInput = exists;
    // TODO: this should idealy navigate to registration screen
    if (!exists)
      this.injectedStores.UIStore &&
        this.injectedStores.UIStore.notify("Account not found.");
  };

  @action
  authenticate = async ({autonavigate = true}) => {
    this.loading = true;
    if (!this.showPasswordInput)
      this.onVerifyEmailComplete(
        await AuthenticationAPI.verifyEmail(this.signinCredentials.email)
      );
    else
      return this.handleUserAuthenticationRequestComplete(
        await AuthenticationAPI.login(this.signinCredentials),
        autonavigate
      );
  };

  @action
  refreshCurrentUser = async () => {
    this.isReloadingUser = true;
    let user = await userService.me();
    if(user) await this.updateAccountDetails(user);
    // logout here if no user
    this.isReloadingUser = false;
  };

}
