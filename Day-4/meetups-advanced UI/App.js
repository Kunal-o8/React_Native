import React from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/mainNavigation/DrawerNav";
import { Provider } from "react-redux";
import store from "./src/store/store";

const App = () => {
  return (
    <PaperProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
};

export default App;
