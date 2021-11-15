import { all, call } from "redux-saga/effects";
import userSagas from "./user/user.sagas";
import hotelsSagas from "./hotels/hotels.sagas";
import favouriteSagas from "./favourite/favourite.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(hotelsSagas), call(favouriteSagas)]);
}
