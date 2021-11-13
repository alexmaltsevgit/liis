import { PayloadAction } from "@reduxjs/toolkit";
import { UnnormalizedDate } from "../../utils/date";
import hotelsMock from "../../hotels-mock.json";
import { Without } from "../../utils/typing";

export type Hotel = typeof hotelsMock[0];

export type HotelsAPIData = Array<Hotel>;

export type HotelID = number;

export type HotelsState = {
  items: HotelsAPIData;
  location: string;
  checkIn: UnnormalizedDate;
  daysCount: number;
  favourite: Array<HotelID>;
  error?: string;
};

export type FetchHotels = PayloadAction<{
  location: string;
  checkIn: UnnormalizedDate;
  daysCount: number;
  limit?: number;
}>;

// prettier-ignore
export type FetchSuccess = PayloadAction<
  Without<HotelsState, "favourite" | "error">
>;

export type FetchError = PayloadAction<{
  error: string;
}>;

export type AddFavourite = PayloadAction<{
  hotelID: HotelID;
}>;

export type AddFavouriteSuccess = PayloadAction<{
  hotelID: HotelID;
}>;

export type AddFavouriteError = PayloadAction<{
  error: string;
}>;

export type RemoveFavourite = PayloadAction<{
  hotelID: HotelID;
}>;

export type RemoveFavouriteSuccess = PayloadAction<{
  hotelID: HotelID;
}>;

export type RemoveFavouriteError = PayloadAction<{
  error: string;
}>;
