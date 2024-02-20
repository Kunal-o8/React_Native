import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import CardDisplay from "../../components/Card";
import { useSelector } from "react-redux";
import { Button } from "react-native-paper";

const EventDetailsScreen = ({ navigation, route }) => {
  const events = useSelector((state) => state.events.events);
  const [event, setEvent] = useState({});
  const { eventId } = route.params;

  useEffect(() => {
    const event = events.find((event) => event.id === eventId);
    setEvent(event);
  }, []);

  // const fetchEvent = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/events/" + eventId);
  //     const data = await response.json();
  //     setEvent(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  console.log("EVENT++-+-+--+-", event, eventId);

  return (
    <View style={styles.container}>
      <CardDisplay data={event} navigate={navigation.navigate} />
      <Button
        onPress={() => navigation.navigate("UpdateEvent", { eventId })}
        mode="contained"
      >
        Update Event
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default EventDetailsScreen;
