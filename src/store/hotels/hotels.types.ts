import { PayloadAction } from "@reduxjs/toolkit";
import { CheckDate } from "../../utils/api/HotelsAPI";

export type Hotel = unknown;

export type HotelsAPIData = Array<Hotel>;

export type HotelsState = {
  items: HotelsAPIData;
  error?: string;
};

export type FetchHotelsPayloadAction = PayloadAction<{
  location: string;
  checkIn: CheckDate;
  checkOut: CheckDate;
  limit?: number;
}>;

export type SuccessPayloadAction = PayloadAction<HotelsAPIData>;

export type ErrorPayloadAction = PayloadAction<{
  error: string;
}>;
