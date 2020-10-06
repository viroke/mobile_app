import React, { useEffect, useState, Suspense } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import organizerService from "../../../services/organizers";
import PeopleCard from "../parts/PeopleCard";
import styles from "../styles";

export default function FeedView(props) {
  const [people, setPeople] = useState(null);
  const { stores, listTitle = "HOSTS", listView = "FlatCard", requestPath = "organizers" } = props;

  const navigation = (stores && stores.ApplicationStore && stores.ApplicationStore.navigation);
  useEffect(() => {
    (async () => {
      const peopleR = (stores && stores.ApplicationStore && stores.ApplicationStore.people) ||
        (await organizerService.getPeople(requestPath));
      setPeople(peopleR);
      if (stores && stores.ApplicationStore)
        stores.ApplicationStore.people = peopleR;
    })();

    return () => {};
  }, []);

  return (
    <>
      <View>
        <Text
          style={{
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: 12,
            color: "#A9AEBE",
            marginLeft: 7,
            marginBottom: 10,
            marginTop: 20,
            fontFamily: "WorkSansMedium",
            lineHeight: 14,
            letterSpacing: -0.45,
            opacity: 0.85,
          }}
        >
          <Text> {` ${listTitle}`} </Text>
        </Text>
      </View>

      <ScrollView
                style={{ flexDirection: "row", padding: 10 }}
                scrollEventThrottle={16}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
        <Suspense fallback={<h1>Loading profile...</h1>}>
          {people
            ? people.map((person) => {
                return (
                  <PeopleCard person={person} key={person.id} navigation={navigation} />
                );
              })
            : null}
        </Suspense>
      </ScrollView>
      {/* </ScrollView> */}
    </>
  );
}
