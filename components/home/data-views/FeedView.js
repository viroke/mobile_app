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
import FeedFullCard from "../parts/FeedFullCard";
import styles from "../styles";
import mockEvents from "../../../mock/mockEvents";

export default function FeedView(props) {
  const [events, setUpcomingEvents] = useState(null);
  const { stores, listTitle = "Upcoming", listView = "FlatCard" } = props;

  useEffect(() => {
    (async () => {
      const events =
        mockEvents ||
        (stores && stores.ApplicationStore && stores.ApplicationStore.events) ||
        (await eventService.getFeedEvents());
      setUpcomingEvents(events);
      if (stores && stores.ApplicationStore)
        stores.ApplicationStore.events = events;
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

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Suspense fallback={<h1>Loading profile...</h1>}>
          {events
            ? events.map((event) => {
                return (
                  <FeedFullCard
                    cardCoverImage={event.eventImages[0]}
                    cardCoverText={event.title}
                    user={"Davido"}
                    amount={event.ticketPrice}
                    key={event.id}
                    isFeedView={true}
                  />
                );
              })
            : null}
        </Suspense>
      </View>
      {/* </ScrollView> */}
    </>
  );
}
