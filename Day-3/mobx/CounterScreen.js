// CounterScreen.js

import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { MobXProviderContext } from "mobx-react";

const CounterScreen = observer(() => {
  const { counterStore } = useContext(MobXProviderContext);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {counterStore.count}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Increment"
          onPress={() => counterStore.increment()}
          color="#007bff"
        />
        <Button
          title="Decrement"
          onPress={() => counterStore.decrement()}
          color="#dc3545"
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
});

export default CounterScreen;
