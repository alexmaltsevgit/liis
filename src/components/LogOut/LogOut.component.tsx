import React, { useCallback } from "react";
import {
  LogOutContainer,
  LogOutSVGContainer,
  LogOutText,
} from "./LogOut.styles";
import { userActions } from "../../store/user/user.slice";
import { useDispatch } from "react-redux";
import { ReactComponent as LogOutSVG } from "../../images/logout.svg";

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
      <LogOutSVGContainer>
        <LogOutSVG />
      </LogOutSVGContainer>
    </LogOutContainer>
  );
};

export default LogOut;
