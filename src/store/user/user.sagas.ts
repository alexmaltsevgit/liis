import { takeEvery, all, call, put } from "redux-saga/effects";
import { UserActionTypes, LoginPayloadAction } from "./user.types";
import Cookies from "js-cookie";
import { CookiesKeys } from "../../utils/cookies";
import { userActions } from "./user.slice";

function* authorize({ payload: { login, password } }: LoginPayloadAction) {
  try {
    // Better make request to server
    yield Cookies.set(CookiesKeys.isAuthorized, "1");
    yield put(userActions.logInSucceeded({ login, password }));
  } catch (e) {
    yield put(userActions.logInError(e));
  }
}

function* unauthorize() {
  try {
    // Better make request to server
    yield Cookies.set(CookiesKeys.isAuthorized, "0");
    yield put(userActions.logOutSucceeded());
  } catch (e) {
    yield put(userActions.logOutError(e));
  }
}

function* onLogin() {
  yield takeEvery(UserActionTypes.TryLogIn, authorize);
}

function* onLogout() {
  yield takeEvery(UserActionTypes.TryLogOut, unauthorize);
}

export default function* userSagas() {
  yield all([call(onLogin), call(onLogout)]);
}
