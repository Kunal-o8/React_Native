import eventReducer from "./reducer/eventReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    events: eventReducer,
  },
});
