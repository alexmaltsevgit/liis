import { Without } from "../../utils/typing";
import { PayloadAction } from "@reduxjs/toolkit";

export type UserState = {
  isAuthorized: boolean;
  login: string;
  error?: string;
};

type UserData = Without<UserState, "isAuthorized" | "error">;

export type LoginPayloadAction = PayloadAction<{
  login: string;
  password: string;
}>;

export type SuccessPayloadAction = PayloadAction<UserData>;

export type ErrorPayloadAction = PayloadAction<{ error: string }>;
