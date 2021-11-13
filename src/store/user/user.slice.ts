import { createSlice } from "@reduxjs/toolkit";
import {
  LoginPayloadAction,
  ErrorPayloadAction,
  UserState,
  SuccessPayloadAction,
} from "./user.types";
import Cookies from "js-cookie";
import { CookiesKeys } from "../../utils/cookies";

// Mock data. Fetch initial state from server in production
const initialState: UserState = {
  isAuthorized: !!Cookies.get(CookiesKeys.isAuthorized),
  login: "",
};

enum ActionTypes {
  TryLogIn = "tryLogIn",
  LogInSuccess = "logInSuccess",
  LogInError = "logInError",

  TryLogOut = "tryLogOut",
  LogOutSuccess = "logOutSuccess",
  LogOutError = "logOutError",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    [ActionTypes.TryLogIn]: (state, action: LoginPayloadAction) => {
      // saga trigger
    },

    [ActionTypes.LogInSuccess]: (state, action: SuccessPayloadAction) => {
      state.isAuthorized = true;
      state.login = action.payload.login;
    },

    [ActionTypes.LogInError]: (state, action: ErrorPayloadAction) => {
      state.error = action.payload.error;
    },

    [ActionTypes.TryLogOut]: () => {
      // saga trigger
    },

    [ActionTypes.LogOutSuccess]: (state) => {
      Object.assign(state, initialState);
      state.isAuthorized = false;
    },

    [ActionTypes.LogOutError]: (state, action: ErrorPayloadAction) => {
      state.error = action.payload.error;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
