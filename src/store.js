import { configureStore } from "@reduxjs/toolkit";
import activeuser from "./activeuser/activeuser";

const store = configureStore({
  reducer: {
    active: activeuser,
  },
});

export default store;