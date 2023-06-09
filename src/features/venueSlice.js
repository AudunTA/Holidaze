import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { toast } from "react-toastify";

const initialState = {
  venues: [],
  filteredVenues: [],
  filter: {
    wifi: false,
    parking: false,
    breakfast: false,
    pets: false,
    guests: "",
    minPrice: 1,
    maxPrice: 3000,
    search: "",
  },
  filterMessage: "",
};

export const venueSlice = createSlice({
  name: "venues",
  initialState,
  reducers: {
    addVenues(state, action) {
      state.venues = action.payload;
    },
    //development log slice
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
      console.log("PAYLOAD: ", action.payload);
      state.filter.search = action.payload;
    },
    addMinPrice(state, action) {
      state.filter.minPrice = action.payload;
    },
    addMaxPrice(state, action) {
      state.filter.maxPrice = action.payload;
    },
    //filter slice, will apply filter and check for search match
    applyFilter(state) {
      state.filteredVenues = _.filter(state.venues, (item) => {
        const searchQuery = state.filter.search.toLowerCase();
        const isNameMatch = item.name.toLowerCase().includes(searchQuery);
        const isLocationMatch = item.location.city
          .toLowerCase()
          .includes(searchQuery);
        return (
          item.price > state.filter.minPrice &&
          item.price < state.filter.maxPrice &&
          item.maxGuests >= state.filter.guests &&
          ((item.meta.wifi && state.filter.wifi) || !state.filter.wifi) &&
          ((item.meta.parking && state.filter.parking) ||
            !state.filter.parking) &&
          ((item.meta.breakfast && state.filter.breakfast) ||
            !state.filter.breakfast) &&
          ((item.meta.pets && state.filter.pets) || !state.filter.pets) &&
          (isNameMatch || isLocationMatch)
        );
      });

      if (state.filteredVenues.length == 0) {
        state.filterMessage = "the filters did not match any results";
      } else {
        //checks if filters are active
        state.filterMessage = `note: filters are active`;
        if (state.filter.search) {
          state.filterMessage = `result for search: "${state.filter.search}" + active filters`;
        }
      }
    },
    clearFilter(state) {
      state.filteredVenues = [];
      (state.filter.wifi = false),
        (state.filter.parking = false),
        (state.filter.guests = ""),
        (state.filter.minPrice = 1),
        (state.filter.maxPrice = 3000),
        (state.search = "");
      state.filterMessage = "";
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
  applySearch,
} = venueSlice.actions;
export const venuesReducer = venueSlice.reducer;
