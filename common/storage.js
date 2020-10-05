import { AsyncStorage } from "react-native";
const STORAGE_TOKEN = "@VirokeStorageStore";

const StorageAPI = () => {
  const get = async (key) => {
    try {
      const value = await AsyncStorage.getItem(`${STORAGE_TOKEN}:${key}`);
      return JSON.parse(value);
    } catch (error) {
      console.log("StorageAPI:get:error could not get data", { key });
      return null;
    }
  };

  const set = async (key, data) => {
    try {
      return await AsyncStorage.setItem(
        `${STORAGE_TOKEN}:${key}`,
        JSON.stringify(data)
      );
    } catch (error) {
      // this kind of error should never happen
      console.log("StorageAPI:get:error could not save data", { key, data });
      return null;
    }
  };

  const remove = async () => {};

  return {
    get,
    set,
    remove,
  };
};

export default StorageAPI();
