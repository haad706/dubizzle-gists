import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gists: [],
  loadingGists: false,
};

export const gistsSlice = createSlice({
  name: "gists",
  initialState,
  reducers: {
    setGists: (state, action) => {
      state.gists = action.payload;
    },
    startLoadingGists: (state) => {
      state.loadingGists = true;
    },
    stopLoadingGists: (state) => {
      state.loadingGists = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGists, startLoadingGists, stopLoadingGists } =
  gistsSlice.actions;

export default gistsSlice.reducer;
