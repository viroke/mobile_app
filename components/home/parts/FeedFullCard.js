import * as React from "react";
import styles from "../styles";
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";
import { Col, Grid } from "react-native-easy-grid";
const { width, height } = Dimensions.get("window");

const FeedFullCard = (props) => {
  return (
    <Col
      style={{
        marginLeft: 13,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Card style={{ backgroundColor: "#2A2B31" }}>
        <TouchableOpacity>
          <Card.Cover
            source={{ uri: props.cardCoverImage }}
            style={{ ...styles.imageCard, height: 200 }}
          />
        </TouchableOpacity>
        <Card.Content style={{ height: 150 }}>
          <Title style={{ ...styles.cardTitleFeedView }}>
            {props.cardCoverText}
          </Title>
          <Grid>
            <Col>
              <Paragraph
                style={{
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: 20,
                  lineHeight: 30,
                  letterSpacing: -0.63434,
                  color: "#BDBDBD",
                  marginTop: 3,
                  opacity: 0.65,
                }}
              >
                {`${props.user} `}
                {/* <Image
                                    source={require("../../../assets/images/Vector.png")}
                                    style={{ width: 10, height: 10 }}
                                /> */}
              </Paragraph>
            </Col>
          </Grid>

          <Grid style={{ marginLeft: -8 }}>
            <Col
              style={{
                marginRight: 10,
                borderRadius: 10,
              }}
            >
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{
                  backgroundColor: "#2F80ED",
                  marginTop: 10,
                  uppercase: false,
                }}
              >
                Join for <Text>&#8358;</Text>
                {` ${props.amount}`}
              </Button>
            </Col>
            <Col style={{ marginLeft: 10, borderRadius: 10 }}>
              <Button
                mode="contained"
                onPress={() => console.log("Pressed")}
                style={{
                  backgroundColor: "rgba(47, 128, 237, 0.1)",
                  marginTop: 10,
                  uppercase: false,
                }}
              >
                Details
              </Button>
            </Col>
          </Grid>
        </Card.Content>
      </Card>

      <View
        style={{
          ...styles.cardOverlay,
          top: 160,
          right: 5,
          width: 90,
          height: 70,
        }}
      >
        <Title
          style={{
            ...styles.cardOverlayText,
            fontSize: 20,
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: 30,
            color: "#FFFFFF",
            textAlign: "center",
            marginTop: 7,
          }}
        >
          12:30 PM Today
        </Title>
      </View>
      {/* if live use right 165, if exlclusive, use right 130 */}
      <View
        style={{
          ...styles.eventTypeOverlay,
          top: 10,
          backgroundColor: "red",
          opacity: 1,
          right: 300,
        }}
      >
        <Title
          style={{
            ...styles.cardOverlayText,
            fontSize: 18,
            lineHeight: 18,
            marginTop: 5,
            fontWeight: "900",
            color: "white",
            opacity: 1,
          }}
        >
          live
        </Title>
      </View>
    </Col>
  );
};

export default FeedFullCard;
