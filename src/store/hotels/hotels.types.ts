import { PayloadAction } from "@reduxjs/toolkit";
import { UnnormalizedDate } from "../../utils/date";
import { Without } from "../../utils/typing";
import { HotelT } from "../../utils/api/types";

export type HotelsState = {
  items: Array<HotelT>;
  location: string;
  checkIn: UnnormalizedDate;
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
  Without<HotelsState, "error">
>;

export type FetchError = PayloadAction<{
  error: string;
}>;
