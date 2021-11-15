import { createSlice } from "@reduxjs/toolkit";
import {
  Login,
  LoginError,
  UserState,
  LoginSuccess,
  LogoutError,
} from "./user.types";
import Cookies from "js-cookie";
import { CookiesKeys } from "../../utils/cookies";

// Mock data. Fetch initial state from server in production
const initialState: UserState = {
  isAuthorized: Boolean(parseInt(Cookies.get(CookiesKeys.isAuthorized) ?? "")),
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
    [ActionTypes.TryLogIn]: (state, action: Login) => {
      // saga trigger
    },

    [ActionTypes.LogInSuccess]: (state, action: LoginSuccess) => {
      state.isAuthorized = true;
      state.login = action.payload.login;
    },

    [ActionTypes.LogInError]: (state, action: LoginError) => {
      state.error = action.payload.error;
    },

    [ActionTypes.TryLogOut]: () => {
      // saga trigger
    },

    [ActionTypes.LogOutSuccess]: (state) => {
      state.isAuthorized = false;
      state.login = "";
    },

    [ActionTypes.LogOutError]: (state, action: LogoutError) => {
      state.error = action.payload.error;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
