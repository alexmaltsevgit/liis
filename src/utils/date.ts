type Timestamp = number;
type StringDate = string;
export type UnnormalizedDate = Date | StringDate | Timestamp;

const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24;

export const getDateByDaysOffset = (date: Date, offset: number) => {
  return new Date(new Date().setDate(date.getDate() + offset));
};

export const getDatesDifference = (left: Date, right: Date) => {
  return right.getDate() - left.getDate();
};

export const secondsToDays = (seconds: number) => {
  return seconds / (secondsInMinutes * minutesInHour * hoursInDay);
};

export const normalize = (date: UnnormalizedDate) => {
  if (date instanceof Date) return date;

  const checkDateType = typeof date;

  switch (checkDateType) {
    case "number":
      return new Date(date);

    case "string":
      const parsedDate = new Date(Date.parse(date as string));
      if (Number.isNaN(parsedDate.getDate()))
        throw new Error(
          "Bad string passed to be parsed as Date. (Invalid date error)"
        );
      return parsedDate;

    default:
      throw new Error("Runtime type error");
  }
};

export const formatRussian = (date: UnnormalizedDate) => {
  return normalize(date).toLocaleDateString("ru-Ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
