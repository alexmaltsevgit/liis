import {
  AddFavouriteError,
  AddFavourite,
  AddFavouriteSuccess,
  RemoveFavourite,
  RemoveFavouriteSuccess,
  RemoveFavouriteError,
} from "./favourite.types";
import { createSlice } from "@reduxjs/toolkit";
import { arrayWithout, getInitialFavourite } from "./favourite.utils";
import { FavouriteState } from "./favourite.types";

const initialState: FavouriteState = {
  items: getInitialFavourite(),
};

enum ActionTypes {
  TryAddFavourite = "tryAddFavourite",
  AddFavouriteSuccess = "addFavouriteSuccess",
  AddFavouriteError = "addFavouriteError",

  TryRemoveFavourite = "tryRemoveFavourite",
  RemoveFavouriteSuccess = "removeFavouriteSuccess",
  RemoveFavouriteError = "removeFavouriteError",
}

const favouriteSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    [ActionTypes.TryAddFavourite]: (state, action: AddFavourite) => {
      // saga trigger
    },

    [ActionTypes.AddFavouriteSuccess]: (state, action: AddFavouriteSuccess) => {
      state.items = [...state.items, action.payload];
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
      state.items = arrayWithout(
        state.items,
        (item) => item.hotelId === action.payload.hotelID
      );
    },

    [ActionTypes.RemoveFavouriteError]: (
      state,
      action: RemoveFavouriteError
    ) => {
      state.error = action.payload.error;
    },
  },
});

export const favouriteReducer = favouriteSlice.reducer;
export const favouriteActions = favouriteSlice.actions;
