import { configureStore } from "@reduxjs/toolkit";
import { herosReducer } from "./slices/hero";
const store = configureStore({
  reducer: {
    hero: herosReducer,
  },
});
export default store;
