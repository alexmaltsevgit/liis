import { PayloadAction } from "@reduxjs/toolkit";
import { UnnormalizedDate } from "../../utils/date";

export type Hotel = unknown;

export type HotelsAPIData = Array<Hotel>;

export type HotelsState = {
  items: HotelsAPIData;
  location: string;
  checkIn: UnnormalizedDate;
  daysCount: number;
  error?: string;
};

export type FetchHotelsPayloadAction = PayloadAction<{
  location: string;
  checkIn: UnnormalizedDate;
  daysCount: number;
  limit?: number;
}>;

export type SuccessPayloadAction = PayloadAction<HotelsState>;

export type ErrorPayloadAction = PayloadAction<{
  error: string;
}>;
