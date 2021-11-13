import React from "react";
import Header from "./Header/Header.component";
import { Gallery, HotelsContainer } from "./Hotels.styles";
import HotelsList from "../HotelsList/HotelsList.component";

const Hotels = () => {
  return (
    <HotelsContainer>
      <Header />
      <Gallery />
      <HotelsList />
    </HotelsContainer>
  );
};

export default Hotels;
