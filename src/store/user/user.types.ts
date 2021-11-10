import { Without } from "../../utils/typing";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthorized: boolean;
  login: string;
  password: string;
};

export type LoginAction = PayloadAction<Without<UserState, "isAuthorized">>;

export enum Actions {
  Login = "login",
  Logout = "logout",
}
