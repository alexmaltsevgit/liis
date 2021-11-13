import React from "react";
import { formatRussian, UnnormalizedDate } from "../../utils/date";
import {
  CheckInDate,
  Date,
  DaysCount,
  HotelContainer,
  ImageWrapper,
  MainInfo,
  Name,
  SecondaryInfo,
  Stars,
} from "./Hotel.styles";
import { ReactComponent as HouseImage } from "../../images/house.svg";
import Star from "../Star/Star.component";
import Heart from "../Heart/Heart.component";

type HotelProps = {
  id: number;
  name: string;
  checkIn: UnnormalizedDate;
  daysCount: number;
  price: number;
  stars: number;

  small?: boolean;
};

const starsCount = 5;

const Hotel = ({
  id,
  name,
  checkIn,
  daysCount,
  price,
  stars,
  small,
}: HotelProps) => {
  return (
    <HotelContainer>
      {small || (
        <ImageWrapper>
          <HouseImage />
        </ImageWrapper>
      )}

      <MainInfo>
        <Name>{name}</Name>

        <Date>
          <CheckInDate>{formatRussian(checkIn)}</CheckInDate>
          <DaysCount>{daysCount}</DaysCount>
        </Date>

        <Stars>
          {Array(starsCount)
            .fill(0)
            .map((_, index) => (
              <Star key={index} active={index < stars} />
            ))}
        </Stars>
      </MainInfo>

      <SecondaryInfo>
        <Heart hotelID={id} />
      </SecondaryInfo>
    </HotelContainer>
  );
};

export default Hotel;
