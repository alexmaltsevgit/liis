import {
  AddFavouriteError,
  AddFavourite,
  AddFavouriteSuccess,
  FetchError,
  FetchHotels,
  HotelsState,
  FetchSuccess,
  RemoveFavourite,
  RemoveFavouriteSuccess,
  RemoveFavouriteError,
} from "./hotels.types";
import { createSlice } from "@reduxjs/toolkit";
import {
  arrayWithout,
  getInitialFavourite,
  getInitialItems,
} from "./hotels.utils";

const initialState: HotelsState = {
  items: getInitialItems(),
  location: "Москва",
  checkIn: new Date(),
  daysCount: 1,
  favourite: getInitialFavourite(),
};

enum ActionTypes {
  TryFetch = "tryFetch",
  FetchSuccess = "fetchSuccess",
  FetchError = "fetchError",

  TryAddFavourite = "tryAddFavourite",
  AddFavouriteSuccess = "addFavouriteSuccess",
  AddFavouriteError = "addFavouriteError",

  TryRemoveFavourite = "tryRemoveFavourite",
  RemoveFavouriteSuccess = "removeFavouriteSuccess",
  RemoveFavouriteError = "removeFavouriteError",
}

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    [ActionTypes.TryFetch]: (state, action: FetchHotels) => {
      // saga trigger
    },

    [ActionTypes.FetchSuccess]: (state, action: FetchSuccess) => {
      const { location, checkIn, daysCount } = action.payload;
      state.items = action.payload.items; // don't copy large list
      state.location = location;
      state.checkIn = checkIn;
      state.daysCount = daysCount;
      state.error = undefined;
    },

    [ActionTypes.FetchError]: (state, action: FetchError) => {
      state.error = action.payload.error;
    },

    [ActionTypes.TryAddFavourite]: (state, action: AddFavourite) => {
      // saga trigger
    },

    [ActionTypes.AddFavouriteSuccess]: (state, action: AddFavouriteSuccess) => {
      state.favourite = [...state.favourite, action.payload.hotelID];
    },

    [ActionTypes.AddFavouriteError]: (state, action: AddFavouriteError) => {
      state.error = action.payload.error;
    },

    [ActionTypes.TryRemoveFavourite]: (state, action: RemoveFavourite) => {
      // saga trigger
    },

    [ActionTypes.RemoveFavouriteSuccess]: (
      state,
      action: RemoveFavouriteSuccess
    ) => {
      state.favourite = arrayWithout(state.favourite, action.payload.hotelID);
    },

    [ActionTypes.RemoveFavouriteError]: (
      state,
      action: RemoveFavouriteError
    ) => {
      state.error = action.payload.error;
    },
  },
});

export const hotelsReducer = hotelsSlice.reducer;
export const hotelsActions = hotelsSlice.actions;
