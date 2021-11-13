import { takeEvery, all, call, put } from "redux-saga/effects";
import { Login } from "./user.types";
import Cookies from "js-cookie";
import { CookiesKeys } from "../../utils/cookies";
import { userActions } from "./user.slice";

function* authorize({ payload: { login, password } }: Login) {
  try {
    // Better make request to server
    yield Cookies.set(CookiesKeys.isAuthorized, "1");
    yield put(userActions.logInSuccess({ login }));
  } catch (e) {
    yield put(userActions.logInError(e.message));
  }
}

function* unauthorize() {
  try {
    // Better make request to server
    yield Cookies.set(CookiesKeys.isAuthorized, "0");
    yield put(userActions.logOutSuccess());
  } catch (e) {
    yield put(userActions.logOutError(e.message));
  }
}

function* onLogin() {
  yield takeEvery(userActions.tryLogIn.type, authorize);
}

function* onLogout() {
  yield takeEvery(userActions.tryLogOut.type, unauthorize);
}

export default function* userSagas() {
  yield all([call(onLogin), call(onLogout)]);
}
