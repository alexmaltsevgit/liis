import React, { useEffect } from "react";
import Header from "./Header/Header.component";
import {
  FavouriteCounter,
  Gallery,
  HotelsContainer,
  StyledHotelsList,
} from "./Hotels.styles";
import { useSelector } from "react-redux";
import store, { RootState } from "../../store/store";
import { declOfNum } from "../../utils/locale";
import { hotelsActions } from "../../store/hotels/hotels.slice";
import hotelsMock from "../../hotels-mock.json";
import {
  defaultDaysCount,
  defaultLimit,
  getInitialState,
} from "../../store/hotels/hotels.utils";

export const getInitialItems = () => {
  const { location, checkIn } = getInitialState();
  if (process.env.NODE_ENV === "production") {
    store.dispatch(
      hotelsActions.tryFetch({
        location,
        checkIn,
        daysCount: defaultDaysCount,
        limit: defaultLimit,
      })
    );
  } else {
    store.dispatch(
      hotelsActions.fetchSuccess({ items: hotelsMock, location, checkIn })
    );
  }
};

const Hotels = () => {
  const hotelsInfo = useSelector((state: RootState) => state.hotels.items);
  const favourite = useSelector((state: RootState) => state.favourite.items);

  useEffect(() => {
    getInitialItems();
  }, []);

  return (
    <HotelsContainer>
      <Header />
      <Gallery />
      <FavouriteCounter>
        Добавлено в Избранное: <span>{favourite.length}</span>{" "}
        {declOfNum(favourite.length, ["отель", "отеля", "отелей"])}
      </FavouriteCounter>
      <StyledHotelsList dataSource={hotelsInfo} />
    </HotelsContainer>
  );
};

export default Hotels;
