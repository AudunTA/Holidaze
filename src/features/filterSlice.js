import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wifi: false,
  parking: false,
  breakfast: true,
  pets: true,
  guests: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilterWifi(state, action) {
      state.wifi = action.payload;
    },
    addFilterParking(state, action) {
      state.parking = action.payload;
    },
    addFilterBreakfast(state, action) {
      state.breakfast = action.payload;
    },
    addFilterPets(state, action) {
      state.pets = action.payload;
    },
    addFilterGuests(state, action) {
      state.guests = action.payload;
    },
  },
});

export const {
  addFilterWifi,
  addFilterParking,
  addFilterBreakfast,
  addFilterPets,
  addFilterGuests,
} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
