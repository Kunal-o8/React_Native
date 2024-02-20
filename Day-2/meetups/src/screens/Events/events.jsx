import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

const EventsListScreen = ({ navigation }) => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8000/events");
      const data = await response.json();
      setEventsData(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => navigation.navigate("EventDetails", { eventId: item.id })}
    >
      <View style={styles.eventContainer}>
        <Image source={{ uri: item.image }} style={styles.eventImage} />
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <FlatList
      data={eventsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  eventContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    flexDirection: "row",
  },
  eventImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  eventInfo: {
    flex: 1,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EventsListScreen;
