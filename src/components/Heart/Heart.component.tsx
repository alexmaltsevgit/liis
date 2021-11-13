import React, { useCallback, useState } from "react";
import { HeartContainer } from "./Heart.styles";
import { ReactComponent as HeartSVG } from "../../images/heart.svg";
import { useDispatch, useSelector } from "react-redux";
import { hotelsActions } from "../../store/hotels/hotels.slice";
import { RootState } from "../../store/store";

type StarProps = {
  hotelID: number;
};

const Heart = ({ hotelID }: StarProps) => {
  const favourite = useSelector((state: RootState) => state.hotels.favourite);
  const [active, setActive] = useState(() => favourite.includes(hotelID));

  const dispatch = useDispatch();
  const toggleFavourite = useCallback(() => {
    const action = active
      ? hotelsActions.tryRemoveFavourite({ hotelID })
      : hotelsActions.tryAddFavourite({ hotelID });

    dispatch(action);
    setActive((active) => !active);
  }, [dispatch, active]);

  return (
    <HeartContainer active={active} onClick={toggleFavourite}>
      <HeartSVG />
    </HeartContainer>
  );
};

export default Heart;
