import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  FavouriteContainer,
  StyledHotelsList,
  Title,
} from "./Favourite.styles";
import { SortRule } from "../HotelsList/HotelsList.types";

const sorts: Array<SortRule> = [
  {
    name: "Рейтинг",
    predicate: (left, right) => right.stars - left.stars,
  },
  {
    name: "Цена",
    predicate: (left, right) => right.priceFrom - left.priceFrom,
  },
];

const Favourite = () => {
  const hotels = useSelector((state: RootState) => state.favourite.items);

  return (
    <FavouriteContainer>
      <Title>Избранное</Title>
      <StyledHotelsList dataSource={hotels} small={true} sorts={sorts} />
    </FavouriteContainer>
  );
};

export default Favourite;
