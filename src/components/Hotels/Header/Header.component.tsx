import React from "react";
import { formatRussian } from "../../../utils/date";
import { Arrow, CheckInDate, HeaderContainer, Title } from "./Header.styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Header = () => {
  const location = useSelector((state: RootState) => state.hotels.location);
  const checkIn = useSelector((state: RootState) => state.hotels.checkIn);

  return (
    <HeaderContainer>
      <Title>
        Отели <Arrow /> {location}
      </Title>
      <CheckInDate>{formatRussian(checkIn)}</CheckInDate>
    </HeaderContainer>
  );
};

export default Header;
