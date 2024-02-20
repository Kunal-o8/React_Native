import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addEvent } from "../../store/actions/eventActions";
import { View, StyleSheet } from "react-native";

const AddEventForm = () => {
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({
    title: "",
    description: "",
    image: "",
    location: {
      name: "",
      address: "",
      latitude: 0,
      longitude: 0,
    },
    dates: [],
  });

  const handleInputChange = (key, value) => {
    setEventData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleDateChange = (value) => {
    const datesData = value.split(",").map((date) => date.trim());
    setEventData((prevData) => ({
      ...prevData,
      dates: datesData,
    }));
  };

  const handleSubmit = () => {
    dispatch(addEvent(eventData));

    setEventData({
      title: "",
      description: "",
      image: "",
      location: {
        name: "",
        address: "",
        latitude: 0,
        longitude: 0,
      },
      dates: [],
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Event Title"
        value={eventData.title}
        onChangeText={(value) => handleInputChange("title", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Description"
        value={eventData.description}
        onChangeText={(value) => handleInputChange("description", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Image URL"
        value={eventData.image}
        onChangeText={(value) => handleInputChange("image", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Location Name"
        value={eventData.location.name}
        onChangeText={(value) =>
          handleInputChange("location", { ...eventData.location, name: value })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Location Address"
        value={eventData.location.address}
        onChangeText={(value) =>
          handleInputChange("location", {
            ...eventData.location,
            address: value,
          })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Location Latitude"
        value={eventData.location.latitude}
        onChangeText={(value) =>
          handleInputChange("location", {
            ...eventData.location,
            latitude: value,
          })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Location Longitude"
        value={eventData.location.longitude}
        onChangeText={(value) =>
          handleInputChange("location", {
            ...eventData.location,
            longitude: value,
          })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Event Dates (comma separated)"
        value={eventData.dates}
        onChangeText={(value) => handleDateChange(value)}
      />

      <Button style={styles.button} mode="contained" onPress={handleSubmit}>
        Add Event
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default AddEventForm;
