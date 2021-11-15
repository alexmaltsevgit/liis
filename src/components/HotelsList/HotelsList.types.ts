import { HotelT } from "../../utils/api/types";

export type Predicate<T> = (left: T, right: T) => number;

export type SortRule = {
  name: string;
  predicate: Predicate<HotelT>;
};

export type Order = "ASC" | "DESC";
