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
        // console.log("test1: ", item.meta.wifi);
        // console.log("test2: ", state.filter.wifi);
        return (
          item.maxGuests >= state.filter.guests &&
          item.meta.wifi === state.filter.wifi &&
          item.meta.parking === state.filter.parking &&
          item.meta.breakfast === state.filter.breakfast &&
          item.meta.pets === state.filter.pets
        );
      });
      if (state.filteredVenues.length == 0) {
        toast("the filters did not match any venues:");
      }
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
} = venueSlice.actions;
export const venuesReducer = venueSlice.reducer;
