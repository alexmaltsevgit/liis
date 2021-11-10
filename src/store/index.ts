import { configureStore, Middleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middleware: Array<Middleware> = [sagaMiddleware];

const store = configureStore({
  reducer: {},
  middleware,
});

export default store;
