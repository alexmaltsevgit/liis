import {
  ErrorPayloadAction,
  FetchHotelsPayloadAction,
  HotelsState,
  SuccessPayloadAction,
} from "./hotels.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: HotelsState = {
  items: [],
  location: "",
  checkIn: "",
  daysCount: 0,
};

enum ActionTypes {
  TryFetch = "tryFetch",
  FetchSuccess = "fetchSuccess",
  FetchError = "fetchError",
}

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    [ActionTypes.TryFetch]: (state, action: FetchHotelsPayloadAction) => {
      console.log("act");
      // saga trigger
    },

    [ActionTypes.FetchSuccess]: (state, action: SuccessPayloadAction) => {
      const { location, checkIn, daysCount } = action.payload;
      state.items = action.payload.items; // don't copy large list
      state.location = location;
      state.checkIn = checkIn;
      state.daysCount = daysCount;
      state.error = undefined;
    },

    [ActionTypes.FetchError]: (state, action: ErrorPayloadAction) => {
      state.error = action.payload.error;
    },
  },
});

export const hotelsReducer = hotelsSlice.reducer;
export const hotelsActions = hotelsSlice.actions;
