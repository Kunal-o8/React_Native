import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  FlatList,
  StyleSheet,
  Image,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getEvents, deleteEvent } from "../../store/actions/eventActions";
import { MaterialIcons } from "@expo/vector-icons";
import { Swipeable } from "react-native-gesture-handler";

const EventSkeleton = () => (
  <View style={styles.eventContainer}>
    <View style={[styles.eventImage, styles.skeleton]} />
    <View style={styles.eventInfo}>
      <View style={[styles.eventTitle, styles.skeleton]} />
      <View style={styles.skeleton} />
    </View>
    <View style={[styles.skeleton, { width: 24, height: 24 }]} />
  </View>
);

const EventsListScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const eventsData = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const fetchEvents = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(getEvents());
      setLoading(false);
      setRefreshing(false);
    }, 5000);
  };

  useEffect(() => {
    fetchEvents();
  }, [page]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // setTimeout(() => {
    setPage(1);

    // }, 5000);
  }, []);

  const loadMore = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  const renderItem = ({ item }) => (
    <Swipeable
      renderRightActions={() => (
        <Pressable onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </Pressable>
      )}
    >
      <Pressable
        onPress={() =>
          navigation.navigate("EventDetails", { eventId: item.id })
        }
      >
        <View style={styles.eventContainer}>
          <Image source={{ uri: item.image }} style={styles.eventImage} />
          <View style={styles.eventInfo}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        </View>
      </Pressable>
    </Swipeable>
  );

  return (
    <FlatList
      data={loading ? Array.from({ length: 10 }) : eventsData}
      renderItem={loading ? EventSkeleton : renderItem}
      keyExtractor={(item, index) => (loading ? index.toString() : item.id)}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      // onEndReached={loadMore}
      // onEndReachedThreshold={0.1}
      // ListFooterComponent={loading && <ActivityIndicator />}
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
  skeleton: {
    backgroundColor: "#ccc",
  },
});

export default EventsListScreen;
