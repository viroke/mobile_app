import React, { useEffect, useState, Suspense } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import eventService from "../../../services/eventService";
import FlatCard from "../parts/FlatCard";
import FullCard from "../parts/FullCard";
import styles from "../styles";
import mockEvents from "../../../mock/mockEvents";

export default function UpcomingView(props) {
  const [events, setUpcomingEvents] = useState(null);
  const { stores, listTitle = "Upcoming", listView = "FlatCard" } = props;

  useEffect(() => {
    (async () => {
      const upcomingEvents =
        mockEvents ||
        (stores &&
          stores.ApplicationStore &&
          stores.ApplicationStore.upcomingEvents) ||
        (await eventService.getUpcomingEvents());
      setUpcomingEvents(upcomingEvents);
      if (stores && stores.ApplicationStore)
        stores.ApplicationStore.upcomingEvents = upcomingEvents;
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
        style={{ flexDirection: "row", padding: 10, paddingTop: 0 }}
        scrollEventThrottle={16}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Suspense fallback={<h1>Loading profile...</h1>}>
            {events
              ? events.map((event) => {
                  return listView === "FlatCard" ? (
                    <FlatCard
                      cardCoverImage={event.eventImages[0]}
                      cardCoverText={event.title}
                      key={event.id}
                      event={event}
                      stores={stores}
                    />
                  ) : (
                    <FullCard
                      cardCoverImage={event.eventImages[0]}
                      cardCoverText={event.title}
                      user={"Davido"}
                      amount={event.ticketPrice}
                      key={event.id}
                      event={event}
                      stores={stores}
                    />
                  );
                })
              : null}
          </Suspense>
        </View>
      </ScrollView>
    </>
  );
}
