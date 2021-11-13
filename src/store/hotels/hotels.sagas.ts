import { all, call, put, takeLatest } from "redux-saga/effects";
import { hotelsActions } from "./hotels.slice";
import HotelsAPI from "../../utils/api/HotelsAPI";
import { FetchHotelsPayloadAction } from "./hotels.types";
import { getDateByDaysOffset, normalize } from "../../utils/date";

function* fetchHotels({
  payload: { location, checkIn, daysCount, limit },
}: FetchHotelsPayloadAction) {
  try {
    const itemsCount = limit ?? HotelsAPI.defaultLimit;
    const checkOut = getDateByDaysOffset(normalize(checkIn), daysCount);
    const hotelsAPI = yield new HotelsAPI(
      location,
      checkIn,
      checkOut,
      itemsCount
    );
    const items = yield call(hotelsAPI.getHotels.bind(hotelsAPI));
    yield put(hotelsActions.fetchSuccess(items));
  } catch (e) {
    yield put(hotelsActions.fetchError(e.message));
  }
}

function* onRequest() {
  yield takeLatest(hotelsActions.tryFetch.type, fetchHotels);
}

export default function* hotelsSagas() {
  yield all([call(onRequest)]);
}
