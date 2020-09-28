import axios from "axios";

export const api = {
  BASE_URL: 'https://api-staging.viroke.io/api/v1/'
  // BASE_URL: "http://localhost:3010/api/v1/",
};

let virokeConnect = axios.create({
  baseURL: api.BASE_URL,
  timeout: 10000,
  transformResponse: axios.defaults.transformResponse.concat((data) => {
    // localStorage.removeItem("token");
    // localStorage.token = JSON.stringify({
    //   token: data.token,
    // });

    return data;
  }),
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = (token) => {
  virokeConnect.interceptors.request.use(function (config) {
    config.headers.Authorization = `${token}`;
    return config;
  });
};

export default virokeConnect;
