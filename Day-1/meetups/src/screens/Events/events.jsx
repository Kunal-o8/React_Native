import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";

const EventsListScreen = ({ navigation }) => {
  const [eventsData, setEventsData] = useState([
    {
      id: "1",
      title: "Event 1",
      description: "This is the first event",
      image: "https://picsum.photos/700",
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
        address: "Location Address 1",
      },
      date: "2021-08-01",
    },
    {
      id: "2",
      title: "Event 2",
      description: "This is the second event",
      image: "https://picsum.photos/700",
      location: {
        latitude: 37.78825,
        longitude: -122.4324,
        address: "Location Address 2",
      },
      date: "2021-08-02",
    },
  ]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("EventDetails", { event: item })}
    >
      <View style={styles.eventContainer}>
        <Image source={{ uri: item.image }} style={styles.eventImage} />
        <View style={styles.eventInfo}>
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
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
