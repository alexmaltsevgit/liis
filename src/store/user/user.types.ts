import { Without } from "../../utils/typing";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthorized: boolean;
  login: string;
  password: string;
  error?: string;
};

export type LoginPayloadAction = PayloadAction<
  Without<UserState, "isAuthorized" | "error">
>;

export type ErrorPayloadAction = PayloadAction<Pick<UserState, "error">>;

export enum UserActionTypes {
  TryLogIn = "user/tryLogIn",
  TryLogOut = "user/tryLogOut",

  LogInSucceeded = "user/logInSucceeded",
  LogInError = "user/logInError",

  LogOutSucceeded = "user/logOutSucceeded",
  LogOutError = "user/logOutError",
}
