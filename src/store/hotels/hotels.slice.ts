import { FetchError, FetchHotels, FetchSuccess } from "./hotels.types";
import { createSlice } from "@reduxjs/toolkit";
import { getInitialState } from "./hotels.utils";

const initialState = getInitialState();

enum ActionTypes {
  TryFetch = "tryFetch",
  FetchSuccess = "fetchSuccess",
  FetchError = "fetchError",
}

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    [ActionTypes.TryFetch]: (state, action: FetchHotels) => {
      // saga trigger
    },

    [ActionTypes.FetchSuccess]: (state, action: FetchSuccess) => {
      const { items, location, checkIn } = action.payload;
      state.items = items;
      state.location = location;
      state.checkIn = checkIn;
      state.error = undefined;
    },

    [ActionTypes.FetchError]: (state, action: FetchError) => {
      state.error = action.payload.error;
    },
  },
});

export const hotelsReducer = hotelsSlice.reducer;
export const hotelsActions = hotelsSlice.actions;
