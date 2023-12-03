import { configureStore } from "@reduxjs/toolkit";
import activeReducer from './features/active/activeSlice'

const store = configureStore({
  reducer: {
    active: activeReducer,
  },
});

export default store;