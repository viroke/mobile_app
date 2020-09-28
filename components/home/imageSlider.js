import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Col, Grid } from "react-native-easy-grid";
import { SimpleLineIcons } from "@expo/vector-icons";

const imageSlider = () => (
  <View>
    <Grid>
      <Col>
        <Image
          source={require("../assets/images/Mask.png")}
          style={styles.sliderImage}
        />
        <Text style={styles.textImage}>Jerome Bell</Text>
      </Col>
      <Col>
        <Image
          source={require("../assets/images/Mask2.png")}
          style={styles.sliderImage}
        />
        <Text style={styles.textImage}>Ralph Edwards</Text>
      </Col>
      <Col>
        <Image
          source={require("../assets/images/Mask3.png")}
          style={styles.sliderImage}
        />
        <Text style={styles.textImage}>Jenny Wilson</Text>
      </Col>
      <Col>
        <Image
          source={require("../assets/images/Mask4.png")}
          style={styles.sliderImage}
        />
        <Text style={styles.textImage}>Albert Flores</Text>
      </Col>
    </Grid>
  </View>
);

const styles = StyleSheet.create({
  textImage: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    width: 60,
    lineHeight: 14,
    letterSpacing: 1,
    color: "#E0E0E0",
    marginTop: 10,
    height: 28,
    textAlign: "center",
  },

  sliderImage: {
    marginTop: 10,
    width: 66,
    height: 66,
    borderWidth: 2,
    borderColor: "#2F80ED",
    borderRadius: 40,
  },
});
export default imageSlider;
