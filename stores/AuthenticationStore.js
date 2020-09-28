import { configure, observable, action, toJS, runInAction } from 'mobx';
import { setClassProps, isEmpty } from '../utils/helpers';
import * as AuthenticationAPI from "../api/authentication";
import Storage from "../common/storage";

export default class AuthenticationStore {
    @observable navigation = {};
	@observable accountDetails = {};
    @observable loading = false;
    @observable showPasswordInput = false;
    @observable showRegistrationInput = false;

    @observable signinCredentials = {
		email: 'invaliduser@gmail.com',
		password: 'password',
	}

    @observable injectedStores = {
        'UIStore': null
    }

    @action
	setClassProps = (arr, self = this) => setClassProps(arr, self);

    @action
	updateAccountDetails =  async (details) => {
        this.accountDetails = details;
        await Storage.set("user-account-details", this.accountDetails);
        return this.accountDetails;
    }

    @action
    handleUserAuthenticationRequestComplete = async (fullResponse) => {
        let { code, data = {}, error } = (fullResponse && fullResponse.data) || {};
        let { bearerToken, expiresIn, user } = data;
        let isSuccess = !error && bearerToken
        if(isSuccess) {
            await Storage.set("api-access-token", bearerToken);
            await Storage.set("api-access-token-expiry", expiresIn);
            this.updateAccountDetails(user);
        }
        let message = AuthenticationAPI.AUTHENTICATION_ERROR_MAP[code] || "Unknown error occured.";
        this.injectedStores.UIStore && this.injectedStores.UIStore.notify(message);
        if(isSuccess) this.navigation.navigate('Home');

    }

    @action 
    onVerifyEmailComplete = ({ exists, message }) => {
        this.showPasswordInput = exists;
        // TODO: this should idealy navigate to registration screen
        if(!exists) this.injectedStores.UIStore && this.injectedStores.UIStore.notify("Account not found.");
    }

    @action
    authenticate = async () => {
        this.loading = true;
        if(!this.showPasswordInput)
            this.onVerifyEmailComplete(
                await AuthenticationAPI.verifyEmail(this.signinCredentials.email)
            );
        else
            this.handleUserAuthenticationRequestComplete(
                await AuthenticationAPI.login(this.signinCredentials)
            )
        this.loading = false;
    }
}
