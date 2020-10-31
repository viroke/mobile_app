import axios from "axios";
import Storage from "../common/storage";

export const endpoints = {
  STAGING: "https://api-staging.viroke.io/api/v1/",
  DEVELOPMENT: "http://192.168.88.89:3010/api/v1/",
  // DEVELOPMENT: "https://api-staging.viroke.io/api/v1/",
};

let APP_ENVIRONMENT = (process.env.NODE_ENV || "development").toUpperCase();
export const baseURL = endpoints[APP_ENVIRONMENT];
console.log({ baseURL, APP_ENVIRONMENT });
const token = Storage.get("api-access-token");
const connect = axios.create({
  baseURL,
  headers: {'Authorization': token }
});

export const setAPIToken = async (connector) => {
  if (!connector) return;
  try {
    const token = await Storage.get("api-access-token");
    console.log({ token })
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
