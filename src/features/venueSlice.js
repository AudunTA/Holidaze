import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  venues: [],
  filteredVenues: [],
  filter: {
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
    guests: "",
    minPrice: 100,
    maxPrice: 3000,
    search: "",
  },
};

export const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    addVenues(state, action) {
      console.log("INNE I ADD VENUES");
      state.venues = action.payload;
    },
    logState(state) {
      console.log(state.filter.wifi);
    },
    addFilterWifi(state, action) {
      state.filter.wifi = action.payload;
    },
    addFilterParking(state, action) {
      state.filter.parking = action.payload;
    },
    addFilterBreakfast(state, action) {
      state.filter.breakfast = action.payload;
    },
    addFilterPets(state, action) {
      state.filter.pets = action.payload;
    },
    addFilterGuests(state, action) {
      state.filter.guests = action.payload;
    },
    addSearch(state, action) {
      state.filter.search = action.payload;
    },
    addMinPrice(state, action) {
      state.filter.minPrice = action.payload;
    },
    addMaxPrice(state, action) {
      state.filter.maxPrice = action.payload;
    },
    applyFilter(state) {
      state.filteredVenues = _.filter(state.venues, (item) => {
        return (
          item.price > state.filter.minPrice &&
          item.price < state.filter.maxPrice &&
          item.maxGuests >= 0 &&
          ((item.meta.wifi && state.filter.wifi) || !state.filter.wifi) &&
          ((item.meta.parking && state.filter.parking) ||
            !state.filter.parking) &&
          ((item.meta.breakfast && state.filter.breakfast) ||
            !state.filter.breakfast) &&
          ((item.meta.pets && state.filter.pets) || !state.filter.pets)
        );
      });

      if (state.filteredVenues.length == 0) {
        toast("the filters did not match any venues:");
      }
    },
    clearFilter(state) {
      state.filteredVenues = [];
      (state.filter.wifi = false),
        (state.filter.parking = false),
        (state.filter.guests = ""),
        (state.filter.minPrice = 100),
        (state.filter.maxPrice = 3000),
        (state.search = "");
    },
  },
});

export const {
  addVenues,
  addFilterWifi,
  addFilterParking,
  addFilterBreakfast,
  addFilterPets,
  addFilterGuests,
  addSearch,
  addMinPrice,
  addMaxPrice,
  applyFilter,
  clearFilter,
} = venueSlice.actions;
export const venuesReducer = venueSlice.reducer;
