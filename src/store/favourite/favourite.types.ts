import { PayloadAction } from "@reduxjs/toolkit";
import { HotelT } from "../../utils/api/types";

export type FavouriteState = {
  items: Array<HotelT>;
  error?: string;
};

export type AddFavourite = PayloadAction<HotelT>;

export type AddFavouriteSuccess = PayloadAction<HotelT>;

export type AddFavouriteError = PayloadAction<{
  error: string;
}>;

export type RemoveFavourite = PayloadAction<{
  hotelID: number;
}>;

export type RemoveFavouriteSuccess = PayloadAction<{
  hotelID: number;
}>;

export type RemoveFavouriteError = PayloadAction<{
  error: string;
}>;
