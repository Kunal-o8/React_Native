import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import CardDisplay from "../../components/Card";

const EventDetailsScreen = ({ route }) => {
  const [event, setEvent] = useState({});
  const { eventId } = route.params;
  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await fetch("http://localhost:8000/events/" + eventId);
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("EVENT++-+-+--+-", event, eventId);

  return (
    <View style={styles.container}>
      <CardDisplay data={event} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default EventDetailsScreen;
