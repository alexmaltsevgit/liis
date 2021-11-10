import { configureStore, Middleware } from "@reduxjs/toolkit";

const middleware: Array<Middleware> = [];

const store = configureStore({
  reducer: {},
  middleware,
});

export default store;
