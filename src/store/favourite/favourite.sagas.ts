import { all, call, put, takeLatest } from "redux-saga/effects";
import { AddFavourite, RemoveFavourite } from "./favourite.types";
import {
  addObjectToLocalStorage,
  getObjectFromLocalStorage,
  LocalStorageKeys,
} from "../../utils/localStorage";
import { arrayWithout } from "./favourite.utils";
import { favouriteActions } from "./favourite.slice";
import { HotelT } from "../../utils/api/types";

function* addFavourite({ payload }: AddFavourite) {
  try {
    const old = yield getObjectFromLocalStorage(LocalStorageKeys.Favourite, []);
    yield addObjectToLocalStorage(LocalStorageKeys.Favourite, [
      ...old,
      payload,
    ]);
    yield put(favouriteActions.addFavouriteSuccess(payload));
  } catch (e) {
    yield put(favouriteActions.addFavouriteError(e.message));
  }
}

function* removeFavourite({ payload: { hotelID } }: RemoveFavourite) {
  try {
    const old = yield getObjectFromLocalStorage(LocalStorageKeys.Favourite, []);
    yield addObjectToLocalStorage(
      LocalStorageKeys.Favourite,
      arrayWithout<HotelT>(old, (item) => item.hotelId === hotelID)
    );
    yield put(favouriteActions.removeFavouriteSuccess({ hotelID }));
  } catch (e) {
    yield put(favouriteActions.removeFavouriteError(e.message));
  }
}

function* onAddFavourite() {
  yield takeLatest(favouriteActions.tryAddFavourite.type, addFavourite);
}

function* onRemoveFavourite() {
  yield takeLatest(favouriteActions.tryRemoveFavourite.type, removeFavourite);
}

export default function* favouriteSagas() {
  yield all([call(onAddFavourite), call(onRemoveFavourite)]);
}
