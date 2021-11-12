import { createSlice } from "@reduxjs/toolkit";
import {
  LoginPayloadAction,
  ErrorPayloadAction,
  UserState,
} from "./user.types";
import Cookies from "js-cookie";
import { CookiesKeys } from "../../utils/cookies";

// Mock data. Fetch initial state from server in production
const initialState: UserState = {
  isAuthorized: !!Cookies.get(CookiesKeys.isAuthorized),
  login: "",
  password: "",
};

enum Actions {
  TryLogIn = "tryLogIn",
  TryLogOut = "tryLogOut",

  LogInSucceeded = "logInSucceeded",
  LogInError = "logInError",

  LogOutSucceeded = "logOutSucceeded",
  LogOutError = "logOutError",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    [Actions.TryLogIn]: (state, action: LoginPayloadAction) => {
      // saga trigger
    },

    [Actions.TryLogOut]: () => {
      // saga trigger
    },

    [Actions.LogInSucceeded]: (state, action: LoginPayloadAction) => {
      state.isAuthorized = true;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },

    [Actions.LogInError]: (state, action: ErrorPayloadAction) => {
      state.error = action.payload.error;
    },

    [Actions.LogOutSucceeded]: (state) => {
      Object.assign(state, initialState);
    },

    [Actions.LogOutError]: (state, action: ErrorPayloadAction) => {
      state.error = action.payload.error;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
