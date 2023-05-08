import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    addVenues(state, action) {
      console.log("INNE I ADD VENUES");
      state.venues = action.payload;
    },
    logState(state) {
      console.log(state);
    },
  },
});

export const { addVenues } = venueSlice.actions;
export const venuesReducer = venueSlice.reducer;
