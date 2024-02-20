import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import EventsListScreen from "../../screens/Events/events";
import EventDetailsScreen from "../../screens/Events/eventDetails";
import UpdateEventForm from "../../screens/Events/updateEvent";

const Stack = createStackNavigator();

const EventsNav = () => {
  return (
    <Stack.Navigator initialRouteName="EventsList">
      <Stack.Screen
        name="EventsList"
        component={EventsListScreen}
        options={{ title: "Events" }}
      />
      <Stack.Screen
        name="EventDetails"
        component={EventDetailsScreen}
        options={{ title: "Event Details" }}
      />
      <Stack.Screen
        name="UpdateEvent"
        component={UpdateEventForm}
        options={{ title: "Update Event" }}
      />
    </Stack.Navigator>
  );
};

export default EventsNav;
