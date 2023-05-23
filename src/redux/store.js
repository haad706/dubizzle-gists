import { configureStore } from "@reduxjs/toolkit";
import gistsSlice from "./slices/gistSlice";

export const store = configureStore({
  /**
   * acts as root reducer
   * all slices must be imported here
   */
  reducer: {
    gistsSlice,
  },
});
