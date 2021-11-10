import { takeEvery, all, call } from "redux-saga/effects";
import { Actions } from "./user.types";
import Cookies from "js-cookie";
import { CookiesKeys } from "../../utils/typing";

function* authorize() {
  // Better make request to server
  Cookies.set(CookiesKeys.Authorized, "1");
}

function* unauthorize() {
  // Better make request to server
  Cookies.set(CookiesKeys.Authorized, "1");
}

function* onLogin() {
  yield takeEvery(Actions.Login, authorize);
}

function* onLogout() {
  yield takeEvery(Actions.Logout, unauthorize);
}

export default function* userSagas() {
  yield all([call(onLogin), call(onLogout)]);
}
