import AsyncStorage from "@react-native-community/async-storage";

export async function saveToken(data) {
  try {
    let dataToSave = JSON.stringify(data);
    await AsyncStorage.setItem("@token", dataToSave);
  } catch (err) {
    //
  }
}

export async function getToken() {
  try {
    let token = await AsyncStorage.getItem("@token");
    if (token !== null) {
      return JSON.parse(token);
    }
  } catch (err) {
    return false;
  }
}

export async function removeToken() {
  try {
    AsyncStorage.removeItem("@token");
    return true;
  } catch (err) {
    return false;
  }
}
