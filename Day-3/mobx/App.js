import React from "react";
import { Provider } from "mobx-react";
import CounterScreen from "./CounterScreen";

import counterStore from "./CounterStore";

const App = () => {
  return (
    <Provider counterStore={counterStore}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
