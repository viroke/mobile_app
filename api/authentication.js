import connect, { baseUrl } from "./connect";
import GLOBAL_HTTP_CODES from "./httpCodes";

export let AUTHENTICATION_ERROR_MAP = Object.assign(GLOBAL_HTTP_CODES, {
  422: "Invalid Email or Password",
  409: "This account already exists",
  200: "You have been successfully logged in.",
});

export async function verifyEmail(email, callback) {
  try {
    let response = await connect.post("user/check_email", { email });
    const { data } = (response && response.data) || {};
    return { exists: data.exists, message: null };
  } catch (error) {
    let errorMessage =
      (error && error.message) ||
      error ||
      "Unknown error occured, please try again";
    return { exists: false, message: errorMessage };
  }
}

export async function login({ email, password }) {
  try {
    let response = await connect.post("users/login", { email, password });
    return response;
  } catch (error) {
    return (error && error.response) || {};
  }
}
