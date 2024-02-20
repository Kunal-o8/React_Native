import React, { useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvent } from "../../store/actions/eventActions";
import { MaterialIcons } from "@expo/vector-icons";

const EventsListScreen = ({ navigation }) => {
  const eventsData = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
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
        <Pressable onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </Pressable>
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
    alignItems: "center",
    justifyContent: "space-between",
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
