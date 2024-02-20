import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import EventsNav from "../eventsNavigation/eventsStackNav";
import AnimatedScreen from "../../screens/Events/AnimatedScreen";
import AddEventForm from "../../screens/Events/add Event";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Events" component={EventsNav} />
      <Drawer.Screen name="Animated" component={AnimatedScreen} />
      <Drawer.Screen name="Add Event" component={AddEventForm} />
    </Drawer.Navigator>
  );
};

export default Navigation;
