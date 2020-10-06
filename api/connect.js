import axios from "axios";
import Storage from "../common/storage";

export const endpoints = {
  STAGING: "https://api-staging.viroke.io/api/v1/",
  DEVELOPMENT: "http://192.168.88.253:3010/api/v1/",
};

let APP_ENVIRONMENT = (process.env.NODE_ENV || "development").toUpperCase();
export const baseURL = endpoints[APP_ENVIRONMENT];
console.log({ baseURL, APP_ENVIRONMENT });
const connect = axios.create({
  baseURL,
});

export const setAPIToken = async (connector) => {
  if (!connector) return;
  try {
    const token = await Storage.get("api-access-token");
    connector.interceptors.request.use(function (config) {
      config.headers.Authorization = `${token}`;
      return config;
    });
  } catch (e) {
    console.log("setAPIToken error", { e });
  }
};

setAPIToken(connect);
export default connect;
