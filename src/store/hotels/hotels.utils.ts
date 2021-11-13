import hotelsMock from "../../hotels-mock.json";
import { HotelsAPIData } from "./hotels.types";
import {
  getObjectFromLocalStorage,
  LocalStorageKeys,
} from "../../utils/localStorage";

export const getInitialItems = () => {
  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    return hotelsMock as HotelsAPIData;
  } else {
    return hotelsMock as HotelsAPIData;
  }
};

export const getInitialFavourite = () => {
  return getObjectFromLocalStorage(LocalStorageKeys.Favourite, []);
};

export const arrayWithout = <T>(arr: Array<T>, el: T) => {
  const newArr = [...arr];
  const index = arr.indexOf(el);
  newArr.splice(index, 1);

  return newArr;
};
