import {
  ErrorPayloadAction,
  FetchHotelsPayloadAction,
  HotelsState,
  SuccessPayloadAction,
} from "./hotels.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: HotelsState = {
  items: [],
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
      // saga trigger
    },

    [ActionTypes.FetchSuccess]: (state, action: SuccessPayloadAction) => {
      state.items = action.payload;
    },

    [ActionTypes.FetchError]: (state, action: ErrorPayloadAction) => {
      state.error = action.payload.error;
    },
  },
});

export const hotelsReducer = hotelsSlice.reducer;
export const hotelsActions = hotelsSlice.actions;
