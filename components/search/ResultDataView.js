import React, { useEffect, useState, Suspense } from "react";
import {
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import organizerService from "../../services/organizers";
import eventService from "../../services/eventService";
import ResultGrid from "./ResultGrid";

export default function DataView(props) {
  const [people, setPeople] = useState(null);
  const { stores } = props;

  const navigation = (stores && stores.ApplicationStore && stores.ApplicationStore.navigation);
  useEffect(() => {
    (async () => {
      const peopleR = (stores && stores.ApplicationStore && stores.ApplicationStore.people) ||
        (await organizerService.getPeople("organizers"));
      setPeople(peopleR);

    })();

    return () => {};
  }, []);

  return (
    <View style={{ marginLeft: 0 }}>
        <ResultGrid
            data={people}
            columns={3}
            loading={false}
            onItemClick={(item) => {
                navigation.push("HostProfile", { person: item })
            }}
            onEndReachedThreshold={400}
            onEndReached={(offset) => {
                console.log("ended")
                // (offset !== -1 ? fetchData() : null)
            }}
        />
    </View>
  );
}
