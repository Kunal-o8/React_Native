import React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const CardDisplay = (props) => (
  <Card style={styles.card}>
    <Card.Title
      title={props.data.title}
      subtitle={props.data.description}
      left={LeftContent}
    />
    <Card.Cover source={{ uri: props.data.image }} />
    <Card.Content style={styles.content}>
      <Text style={styles.address}>{props.data.location.address}</Text>
      <Text style={styles.date}>{props.data.date}</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  content: {
    padding: 16,
  },
  address: {
    fontSize: 14,
    color: "#999",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
});

export default CardDisplay;
