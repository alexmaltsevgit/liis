import { HotelsState } from "./hotels.types";

export const defaultLimit = 30;
export const defaultDaysCount = 1;

export const getInitialState = (): HotelsState => {
  return {
    items: [],
    location: "Москва",
    checkIn: new Date(),
  };
};
