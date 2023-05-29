import { configureStore } from "@reduxjs/toolkit";
import { venuesReducer } from "./features/venueSlice";
import { profileReducer } from "./features/profileSlice";

export const store = configureStore({
  reducer: {
    venues: venuesReducer,
    profile: profileReducer,
  },
});
