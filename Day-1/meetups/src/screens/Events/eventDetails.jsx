import React from "react";
import { View, StyleSheet } from "react-native";
import CardDisplay from "../../components/Card";

const EventDetailsScreen = ({ route }) => {
  const { event } = route.params;

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
