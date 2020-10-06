import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  overlay: {
    opacity: 0.8,
    backgroundColor: "black",
  },
  pulldown: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#18191D",
    width: width,
    height: height,
  },

  container: {
    flex: 1,
    marginTop: 30,
    // marginLeft: 1,
    marginRight: 15,
  },

  title: {
    height: 28,
    fontStyle: "normal",
    fontSize: 24,
    letterSpacing: 0.9,
    lineHeight: 28,
    color: "#D3D3D3",
    fontFamily: "WorkSans",
  },

  iconLabel: {
    height: 12,
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    letterSpacing: -0.8,
    color: "#BDBDBD",
    marginTop: 5,
    lineHeight: 12,
    fontFamily: "WorkSansLight",
    opacity: 0.8,
  },

  image: {
    height: 82,
    width: 169,
    backgroundColor:
      "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(.jpg)",
  },

  text: {
    position: "absolute",
    left: 5.33,
    top: 45,
    right: 52.27,
    fontStyle: "normal",
    fontSize: 10,
    letterSpacing: -0.25,
    color: "#E0E0E0",
    elevation: 3,
    fontFamily: "WorkSansMedium",
  },

  imageCard: {
    height: 100,
    borderRadius: 4,
    backgroundColor: "#2A2B31",
  },

  imageCardBottom: {
    height: 100,
    borderRadius: 4,
    backgroundColor: "#2A2B31",
    opacity: 0.7,
    marginBottom: 5,
  },

  cardTitle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 14,
    letterSpacing: -0.63434,
    color: "#F2F2F2",
    marginTop: 10,
    fontFamily: "WorkSansSemiBold",
    opacity: 0.8,
  },

  cardTitleFeedView: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 25,
    // lineHeight: 14,
    letterSpacing: -0.63434,
    color: "#F2F2F2",
    marginTop: 10,
    fontFamily: "WorkSansSemiBold",
    opacity: 0.8,
  },

  cardName: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 11,
    lineHeight: 13,
    letterSpacing: -0.63434,
    color: "#BDBDBD",
    marginTop: 3,
    marginLeft: 8,
    opacity: 0.7,
  },

  sliderImage: {
    marginTop: 10,
    width: 66,
    height: 66,
    // borderColor: "#2F80ED",
    borderRadius: 40,
    opacity: 0.9,
    justifyContent:'center'
  },

  sliderImagecol: {
    marginRight: 20,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',       //THIS LINE HAS CHANGED
    paddingLeft: 10,
  },

  textImage: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 1,
    color: "#E0E0E0",
    marginTop: 10,
    height: 28,
    textAlign: "center",
    fontFamily: "WorkSansMedium",
    opacity: 0.85,
  },
  cardPrice: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 9.5151,
    lineHeight: 11,
    letterSpacing: -0.63434,
    color: "#BDBDBD",
    marginTop: 10,
    opacity: 0.7,
  },

  cardButtonText: {
    color: "#fff",
  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    height: 28,
    width: 28,
    alignItems: "center",
    backgroundColor: "#2F80ED",
    padding: 10,
    borderRadius: 4,
    width: 70,
    marginTop: 10,
    opacity: 0.6,
    // Notice this updates the default style
  },

  eventTypeOverlay: {
    position: "absolute",
    right: 165,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    paddingRight: 6,
    paddingLeft: 6,
    paddingTop: 1,
    paddingBottom: 1,
    elevation: 3
    // width: 40,
    // elevation: 3,
  },

  cardOverlay: {
    position: "absolute",
    top: 70,
    right: 5,
    backgroundColor: "#454545",
    borderRadius: 4,
    width: 60,
    height: 45,
    elevation: 3,
  },

  cardOverlayText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 9,
    lineHeight: 15,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 7,
    opacity: 0.65,
    fontFamily: "WorkSansSemiBold",
  },

  cardOverlayBottom: {
    position: "absolute",
    right: 0,
    top: 20,
    backgroundColor: "#000000",
    borderRadius: 4,
    width: 243,
    height: 44,
    elevation: 3,
  },
});

export default styles;
