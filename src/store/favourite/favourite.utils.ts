import {
  getObjectFromLocalStorage,
  LocalStorageKeys,
} from "../../utils/localStorage";

export const getInitialFavourite = () => {
  return getObjectFromLocalStorage(LocalStorageKeys.Favourite, []);
};

export const arrayWithout = <T>(
  arr: Array<T>,
  predicate: (el: T) => boolean
) => {
  const newArr = [...arr];
  const index = arr.findIndex(predicate);
  newArr.splice(index, 1);

  return newArr;
};
