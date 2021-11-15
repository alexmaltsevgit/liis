import { all, call, put, takeLatest } from "redux-saga/effects";
import { hotelsActions } from "./hotels.slice";
import HotelsAPI from "../../utils/api/HotelsAPI";
import { FetchHotels } from "./hotels.types";
import { getDateByDaysOffset, normalize } from "../../utils/date";
import { HotelT } from "../../utils/api/types";

function* fetchHotels({
  payload: { location, checkIn, daysCount, limit },
}: FetchHotels) {
  try {
    const itemsCount = limit ?? HotelsAPI.defaultLimit;
    const checkInNormalized = normalize(checkIn);
    const checkOutDate = getDateByDaysOffset(checkInNormalized, daysCount);
    const hotelsAPI = yield new HotelsAPI(
      location,
      checkInNormalized,
      checkOutDate,
      itemsCount
    );

    const items = yield call(hotelsAPI.getHotels.bind(hotelsAPI));
    yield items.forEach((item: HotelT) => {
      item.checkIn = checkInNormalized.toString();
      item.daysCount = daysCount;
    });

    yield put(
      hotelsActions.fetchSuccess({
        items,
        location,
        checkIn: checkInNormalized,
      })
    );
  } catch (e) {
    yield put(hotelsActions.fetchError(e.message));
  }
}

function* onFetchRequest() {
  yield takeLatest(hotelsActions.tryFetch.type, fetchHotels);
}

export default function* hotelsSagas() {
  yield all([call(onFetchRequest)]);
}
