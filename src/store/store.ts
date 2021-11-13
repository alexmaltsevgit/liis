import { configureStore, Middleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { userReducer } from "./user/user.slice";
import rootSaga from "./rootSaga";
import { hotelsReducer } from "./hotels/hotels.slice";

const sagaMiddleware = createSagaMiddleware();

// production middleware
const middleware: Array<Middleware> = [sagaMiddleware];

// development middleware
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: { user: userReducer, hotels: hotelsReducer },
  middleware,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
