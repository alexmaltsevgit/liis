import hotelsMock from "../../hotels-mock.json";
import { UnnormalizedDate } from "../date";

export type HotelT = typeof hotelsMock[0] & {
  checkIn: UnnormalizedDate;
  daysCount: number;
};
