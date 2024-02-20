import React, { useRef, useEffect } from "react";
import { Animated, Text, View } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const AnimatedScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const lastOffset = { x: 0, y: 0 };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, []);

  const onGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: translateX,
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      lastOffset.x += event.nativeEvent.translationX;
      lastOffset.y += event.nativeEvent.translationY;
      translateX.setOffset(lastOffset.x);
      translateX.setValue(0);
      translateY.setOffset(lastOffset.y);
      translateY.setValue(0);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={onGestureEvent}
      onHandlerStateChange={onHandlerStateChange}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateX: translateX }, { translateY: translateY }],
          height: 150,
          width: 150,
          backgroundColor: "blue",
          borderRadius: 5,
        }}
      >
        <Text>Fading and Draggable View!</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default AnimatedScreen;
