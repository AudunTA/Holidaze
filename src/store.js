import { configureStore } from "@reduxjs/toolkit";
import { venuesReducer } from "./features/venues/venueSlice";
import { profileReducer } from "./features/profile/profileSlice";
export const store = configureStore({
  reducer: {
    venues: venuesReducer,
    profile: profileReducer,
  },
});
