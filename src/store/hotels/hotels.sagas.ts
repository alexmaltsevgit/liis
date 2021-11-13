import { all, call, put, takeLatest } from "redux-saga/effects";
import { hotelsActions } from "./hotels.slice";
import HotelsAPI from "../../utils/api/HotelsAPI";
import { AddFavourite, FetchHotels, RemoveFavourite } from "./hotels.types";
import { getDateByDaysOffset, normalize } from "../../utils/date";
import {
  addObjectToLocalStorage,
  getObjectFromLocalStorage,
  LocalStorageKeys,
} from "../../utils/localStorage";
import { arrayWithout } from "./hotels.utils";

function* fetchHotels({
  payload: { location, checkIn, daysCount, limit },
}: FetchHotels) {
  try {
    const itemsCount = limit ?? HotelsAPI.defaultLimit;
    const checkInDate = normalize(checkIn);
    const checkOutDate = getDateByDaysOffset(checkInDate, daysCount);
    const hotelsAPI = yield new HotelsAPI(
      location,
      checkInDate,
      checkOutDate,
      itemsCount
    );
    const items = yield call(hotelsAPI.getHotels.bind(hotelsAPI));
    yield put(
      hotelsActions.fetchSuccess({
        items,
        location,
        checkIn: checkInDate,
        daysCount,
      })
    );
  } catch (e) {
    yield put(hotelsActions.fetchError(e.message));
  }
}

function* addFavourite({ payload: { hotelID } }: AddFavourite) {
  try {
    const old = yield getObjectFromLocalStorage(LocalStorageKeys.Favourite, []);
    yield addObjectToLocalStorage(LocalStorageKeys.Favourite, [
      ...old,
      hotelID,
    ]);
    yield put(hotelsActions.addFavouriteSuccess({ hotelID }));
  } catch (e) {
    yield put(hotelsActions.addFavouriteError(e.message));
  }
}

function* removeFavourite({ payload: { hotelID } }: RemoveFavourite) {
  try {
    const old = yield getObjectFromLocalStorage(LocalStorageKeys.Favourite, []);
    yield addObjectToLocalStorage(
      LocalStorageKeys.Favourite,
      arrayWithout(old, hotelID)
    );
    yield put(hotelsActions.removeFavouriteSuccess({ hotelID }));
  } catch (e) {
    yield put(hotelsActions.removeFavouriteError(e.message));
  }
}

function* onFetchRequest() {
  yield takeLatest(hotelsActions.tryFetch.type, fetchHotels);
}

function* onAddFavourite() {
  yield takeLatest(hotelsActions.tryAddFavourite.type, addFavourite);
}

function* onRemoveFavourite() {
  yield takeLatest(hotelsActions.tryRemoveFavourite.type, removeFavourite);
}

export default function* hotelsSagas() {
  yield all([
    call(onFetchRequest),
    call(onAddFavourite),
    call(onRemoveFavourite),
  ]);
}
