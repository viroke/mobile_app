import { configure, observable, action, toJS, runInAction } from 'mobx';
import { setClassProps, isEmpty } from '../utils/helpers';
import * as AuthenticationAPI from "../api/authentication";
import Storage from "../common/storage";
import { Snackbar } from 'react-native-paper';


// Store for Managing UI Componenents
export default class UIStore {
    @observable toast = false;
    @observable notification = {
        message: null
    }
    
    @action
    notify = (message) => {
        this.notification.message = message
    }
}
