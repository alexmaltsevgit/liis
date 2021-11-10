import { createSlice } from "@reduxjs/toolkit";
import { Actions, LoginAction, UserState } from "./user.types";

const initialState: UserState = {
  isAuthorized: false,
  login: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    [Actions.Login]: (state, action: LoginAction) => {
      state.isAuthorized = true;
      state.login = action.payload.login;
      state.password = action.payload.password;
    },

    [Actions.Logout]: (state) => {
      state.isAuthorized = initialState.isAuthorized;
      state.login = initialState.login;
      state.password = initialState.password;
    },
  },
});
