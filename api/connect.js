import axios from "axios";

export const endpoints = {
  STAGING: 'https://api-staging.viroke.io/api/v1/',
  DEVELOPMENT: "http://192.168.88.68:3010/api/v1/"
};

let APP_ENVIRONMENT = (process.env.NODE_ENV || 'development').toUpperCase();
export const baseURL = endpoints[APP_ENVIRONMENT];

const connect = axios.create({
  baseURL,
});

export default connect;