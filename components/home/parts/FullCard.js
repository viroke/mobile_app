import * as React from "react";
import styles from "../styles";
import { Text, View, TouchableOpacity, Image, Dimensions, Platform } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { Col, Grid } from "react-native-easy-grid";
const { width, height } = Dimensions.get("window");
import { clipText } from "../../../utils/helpers";

const FullCard = (props) => {
  let navigation =
    props.stores &&
    props.stores.ApplicationStore &&
    props.stores.ApplicationStore.navigation;
  return (
    <Col
      style={{
        marginLeft: 5,
        borderRadius: 10,
        width: 200,
      }}
    >
      <Card style={{ backgroundColor: "#2A2B31" }}>
        <TouchableOpacity
          onPress={() =>
            navigation &&
            navigation.navigate("SingleEvent", {
              data: props.event,
            })
          }
        >
          <Card.Cover
            source={{ uri: props.cardCoverImage }}
            style={{ ...styles.imageCard, height: 120 }}
          />
        </TouchableOpacity>
        <Card.Content style={{ height: 150 }}>
          <Text ellipsizeMode='clip' numberOfLines={1} style={{ ...styles.cardTitle }}>{props.cardCoverText}</Text>
          <Grid>
            <Col>
              <Paragraph
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 11,
                  lineHeight: 13,
                  letterSpacing: -0.63434,
                  color: "#BDBDBD",
                  marginTop: 3,
                  opacity: 0.65,
                }}
              >
                {`${props.user} `}
                <Image
                    source={require("../../../assets/images/Vector.png")}
                    style={{ width: 10, height: 10 }}
                />
              </Paragraph>
            </Col>
          </Grid>

          <View>
            <Title style={styles.cardPrice}>
              Entry Fee: <Text>&#8358;</Text> {props.amount}
            </Title>
          </View>

          <Grid>
            <Col>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{
                  backgroundColor: "#2F80ED",
                  marginTop: 10,
                  uppercase: false,
                }}
              >
                <Text style={{ textTransform: "capitalize"}}>Join</Text>
              </Button>
            </Col>
            <Col style={{ marginLeft: 10, borderRadius: 10 }}>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{
                  backgroundColor: "#7EB5FF",
                  marginTop: 10,
                  uppercase: false
                }}
              >
                <Text style={{ textTransform: "capitalize" }}>
                    {Platform.OS === "ios" ? "Details" : "More" }
                </Text>
              </Button>
            </Col>
          </Grid>
        </Card.Content>
      </Card>

      <View style={{ ...styles.cardOverlay, top: 77 }}>
        <Title style={{ ...styles.cardOverlayText, fontSize: 12 }}>
          12:30 PM Today
        </Title>
      </View>
      {/* if live use right 165, if exlclusive, use right 130 */}
      <View
        style={{
          ...styles.eventTypeOverlay,
          top: 5,
          backgroundColor: "#C4C4C4",
          opacity: 1,
          right: 130,
          elevation: 3
        }}
      >
        <Title
          style={{
            ...styles.cardOverlayText,
            fontSize: 12,
            marginTop: 1,
            fontWeight: "900",
            color: "white",
            opacity: 1,
            elevation: 3
          }}
        >
          exclusive
        </Title>
      </View>
    </Col>
  );
};

export default FullCard;
