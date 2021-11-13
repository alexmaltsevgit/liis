import React, { useCallback } from "react";
import { LogOutContainer, LogOutText } from "./LogOut.styles";
import { userActions } from "../../store/user/user.slice";
import { useDispatch } from "react-redux";

type LogOutProps = {
  text?: string;
};

const LogOut = ({ text = "Выйти" }: LogOutProps) => {
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(userActions.tryLogOut());
  }, [dispatch]);

  return (
    <LogOutContainer onClick={logOut}>
      <LogOutText>{text}</LogOutText>
    </LogOutContainer>
  );
};

export default LogOut;
