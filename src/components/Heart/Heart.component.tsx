import React, { useCallback, useEffect, useState } from "react";
import { HeartContainer } from "./Heart.styles";
import { ReactComponent as HeartSVG } from "../../images/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HotelT } from "../../utils/api/types";
import { favouriteActions } from "../../store/favourite/favourite.slice";

type HeartProps = {
  hotel: HotelT;
};

const checkActive = (list: Array<HotelT>, current: HotelT) => {
  return list.some((item) => item.hotelId === current.hotelId);
};

const Heart = ({ hotel }: HeartProps) => {
  const favourite = useSelector((state: RootState) => state.favourite);
  const [active, setActive] = useState(() =>
    checkActive(favourite.items, hotel)
  );

  const dispatch = useDispatch();
  const toggleFavourite = useCallback(() => {
    const hotelID = hotel.hotelId;
    const action = active
      ? favouriteActions.tryRemoveFavourite({ hotelID })
      : favouriteActions.tryAddFavourite(hotel);

    dispatch(action);
    setActive((active) => !active);
  }, [dispatch, active, hotel]);

  useEffect(() => {
    setActive(checkActive(favourite.items, hotel));
  }, [favourite, hotel]);

  return (
    <HeartContainer active={active} onClick={toggleFavourite}>
      <HeartSVG />
    </HeartContainer>
  );
};

export default Heart;
