import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const halfWidth = width / 2;


const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: "#2A2B31",
    paddingBottom: 40,
    fontFamily: "WorkSansMedium",
  },
  skipLabel: {
    textAlign: "right",
    color: "#A4A4BD",
    padding: 40,
    fontSize: 20,
  },
  boardImage: {
    position: "absolute",
    left: width - 280,
    top: height - 530,
    width: 212,
    height: 205,
    // elevation:3,
    zIndex: 3,
  },
});

export default styles;
