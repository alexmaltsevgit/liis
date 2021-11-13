import React from "react";
import { HeaderContainer, Logo } from "./Header.styles";
import LogOut from "../LogOut/LogOut.component";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to={"/"}>Simple Hotel Check</Logo>
      <LogOut />
    </HeaderContainer>
  );
};

export default Header;
