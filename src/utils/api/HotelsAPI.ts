import { HotelsAPIData } from "../../store/hotels/hotels.types";

type Timestamp = number;
type StringDate = string;
export type CheckDate = Date | StringDate | Timestamp;

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

  public setDate(value: CheckDate) {
    this.date = Check.normalized(value);
  }

  public constructor(checkDate: CheckDate) {
    this.setDate(checkDate);
  }

  private static normalized(checkDate: CheckDate) {
    if (checkDate instanceof Date) return checkDate;

    const checkDateType = typeof checkDate;
    switch (checkDateType) {
      case "number":
        return new Date(checkDate);
      case "string":
        return new Date(Date.parse(checkDate as string));
      default:
        throw new Error("Please, use typescript");
    }
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
    checkIn: CheckDate,
    checkOut: CheckDate,
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
