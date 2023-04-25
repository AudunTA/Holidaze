import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  venues: [],
};

export const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    addVenues(state, action) {
      state.venues = action.payload;
    },
    logState(state) {
      console.log(state);
    },
  },
});

export const { addVenues } = venueSlice.actions;
export const venuesReducer = venueSlice.reducer;
