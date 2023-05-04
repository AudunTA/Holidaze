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
  },
});

export const { addProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
