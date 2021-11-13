import { all, call, put, takeLatest } from "redux-saga/effects";
import { hotelsActions } from "./hotels.slice";
import HotelsAPI from "../../utils/api/HotelsAPI";
import { FetchHotelsPayloadAction } from "./hotels.types";

function* fetchHotels({
  payload: { location, checkIn, checkOut, limit },
}: FetchHotelsPayloadAction) {
  try {
    const itemsCount = limit ?? HotelsAPI.defaultLimit;
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
