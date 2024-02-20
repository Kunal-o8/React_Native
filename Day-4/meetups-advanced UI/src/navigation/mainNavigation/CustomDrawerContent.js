// CustomDrawerContent.js
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";

const CustomDrawerContent = (props) => {
  // console.log("custom props-+-+-++--+-+-+-+-+", props);
  return (
    <DrawerContentScrollView {...props} style={styles.drawerContent}>
      <View style={styles.header}>
        <Text style={styles.title}>Meetups</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  header: {
    backgroundColor: "coral",
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
