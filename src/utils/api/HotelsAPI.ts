import { HotelsAPIData } from "../../store/hotels/hotels.types";
import { normalize, UnnormalizedDate } from "../date";

enum RequestKeys {
  location = "location",
  checkIn = "checkIn",
  checkOut = "checkOut",
  limit = "limit",
}

class URLBuilder {
  public baseURL = "http://engine.hotellook.com/api/v2/cache.json";
  public URL = this.baseURL + "?";

  public addArgument(key: string, argument: string) {
    this.URL += `${key}=${argument}&`;
    return this;
  }
}

class Check {
  private date: Date = new Date();

  public getFormattedDate() {
    // yyyy-mm-dd
    // prettier-ignore
    return this.date
      .toLocaleDateString('ru-RU')
      .split("T")[0]
      .split('.')
      .reverse()
      .join('-')
  }

  public setDate(value: UnnormalizedDate) {
    this.date = normalize(value);
  }

  public constructor(checkDate: UnnormalizedDate) {
    this.setDate(checkDate);
  }
}

export default class HotelsAPI {
  public static readonly defaultLimit = 10;

  private _limit: number = HotelsAPI.defaultLimit;

  public get limit() {
    return this._limit;
  }

  public set limit(value: number) {
    if (!value || value <= 0)
      throw new Error(
        `Must be at least 1 item per request (limit parameter). You passed ${value}`
      );
    this._limit = value;
  }

  private URL = "";

  private location: string;
  private checkIn: Check;
  private checkOut: Check;

  public constructor(
    location: string,
    checkIn: UnnormalizedDate,
    checkOut: UnnormalizedDate,
    limit?: number
  ) {
    this.location = location;
    this.checkIn = new Check(checkIn);
    this.checkOut = new Check(checkOut);
    this.limit = limit as number;

    this.buildRequestURL();
  }

  public async getHotels(): Promise<HotelsAPIData> {
    const response = await fetch(this.URL);
    return await response.json();
  }

  private buildRequestURL() {
    const builder = new URLBuilder();
    builder
      .addArgument(RequestKeys.location, this.location)
      .addArgument(RequestKeys.checkIn, this.checkIn.getFormattedDate())
      .addArgument(RequestKeys.checkOut, this.checkOut.getFormattedDate())
      .addArgument(RequestKeys.limit, this.limit.toString());

    this.URL = builder.URL;
  }
}
