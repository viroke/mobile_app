import AuthenticationStoreClass from './AuthenticationStore';
import UIStoreClass from './UIStore';

const AuthenticationStore = new AuthenticationStoreClass();
const UIStore = new UIStoreClass();

export default {
    AuthenticationStore,
    UIStore
}
