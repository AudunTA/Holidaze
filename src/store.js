import { configureStore } from "@reduxjs/toolkit";
import { venuesReducer } from "./features/venues/venueSlice";
export const store = configureStore({
  reducer: {
    venues: venuesReducer,
  },
});
