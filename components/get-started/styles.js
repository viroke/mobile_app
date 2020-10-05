import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const passwordDisplay = "none";
const emailDisplay = "flex";

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#18191D",
  },

  container: {
    backgroundColor: "#18191D",
    paddingTop: height - 450,
    paddingBottom: 85,
  },

  heading: {
    color: "#D3D3D3",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 26,
    marginTop: 10,
    lineHeight: 30,
    margin: 20,
    letterSpacing: -0.8,
    fontFamily: "WorkSans",
  },

  inputP: {
    margin: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 3,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.3,
    paddingLeft: 15,
    color: "#BDBDBD",
    backgroundColor: "#2A2B31",
    fontFamily: "WorkSansMedium",
    display: passwordDisplay,
  },

  input: {
    margin: 20,
    height: 50,
    borderWidth: 1,
    borderRadius: 3,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: -0.3,
    paddingLeft: 15,
    color: "#BDBDBD",
    backgroundColor: "#2A2B31",
    fontFamily: "WorkSansMedium",
    display: emailDisplay,
    borderColor: "#2A2B31",
  },
  submitButton: {
    backgroundColor: "#2F80ED",
    padding: 10,
    margin: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.65,
    borderRadius: 4,
    color: "#ffff",
  },
  submitButtonText: {
    color: "white",
    fontFamily: "WorkSansMedium",
    height: 20,
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: -0.3,
  },

  subHeading: {
    color: "#F2F2F2",
    fontStyle: "normal",
    fontWeight: "normal",
    margin: 20,
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: 1,
    opacity: 0.9,
    fontFamily: "WorkSansLight",
  },
  icon: {
    color: "#2F80ED",
    margin: 20,
    marginTop: 50,
  },

  text: {
    color: "#919297",
    fontStyle: "normal",
    fontWeight: "normal",
    margin: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: -0.3,
    fontFamily: "WorkSansLight",
  },

  login: {
    color: "#2F80ED",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 17,
    margin: 10,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    lineHeight: 16,
    fontSize: 14,
    letterSpacing: -0.3,
    fontFamily: "WorkSansMedium",
  },
});

export default styles;
