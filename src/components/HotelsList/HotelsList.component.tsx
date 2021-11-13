import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Hotel from "../Hotel/Hotel.component";
import { Item, List } from "./HotelsList.styles";

type HotelsListProps = {
  small?: boolean;
};

const HotelsList = ({ small = false }: HotelsListProps) => {
  const hotelsInfo = useSelector((state: RootState) => state.hotels);

  return (
    <List>
      {hotelsInfo.items.map((hotel) => (
        <Item key={hotel.hotelId}>
          <Hotel
            id={hotel.hotelId}
            name={hotel.hotelName}
            checkIn={hotelsInfo.checkIn}
            daysCount={hotelsInfo.daysCount}
            price={hotel.priceFrom}
            stars={hotel.stars}
            small={small}
          />
        </Item>
      ))}
    </List>
  );
};

export default HotelsList;
