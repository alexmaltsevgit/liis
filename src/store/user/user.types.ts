import { Without } from "../../utils/typing";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthorized: boolean;
  login: string;
  error?: string;
};

type UserData = Without<UserState, "isAuthorized" | "error">;

export type Login = PayloadAction<{
  login: string;
  password: string;
}>;

export type LoginSuccess = PayloadAction<UserData>;

export type LoginError = PayloadAction<{ error: string }>;

export type Logout = undefined;

export type LogoutSuccess = undefined;

export type LogoutError = PayloadAction<{ error: string }>;
