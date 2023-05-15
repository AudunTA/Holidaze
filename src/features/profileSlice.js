import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: [],
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile(state, action) {
      console.log("INNE I ADD PROFILE");
      state.profile = action.payload;
    },
    logState(state) {
      console.log(state);
    },
    deleteMyVenue(state, action) {
      const venueIdToDelete = action.payload;
      state.profile.venues = state.profile.venues.filter(
        (venues) => venues.id !== venueIdToDelete
      );
    },
    updateAvatar(state, action) {
      const newAvatar = action.payload;
      state.profile.avatar = newAvatar;
    },
  },
});

export const { addProfile, deleteMyVenue, updateAvatar } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
