import React from "react";
import { formatRussian } from "../../utils/date";
import {
  CheckInDate,
  Date,
  DaysCount,
  HeartWrapper,
  HotelContainer,
  HotelContent,
  ImageWrapper,
  InfoRow,
  Name,
  Price,
  PriceTitle,
  PriceWrapper,
  Stars,
  Subtitle,
  TitleRow,
} from "./Hotel.styles";
import { ReactComponent as HouseImage } from "../../images/house.svg";
import Star from "../Star/Star.component";
import Heart from "../Heart/Heart.component";
import { HotelT } from "../../utils/api/types";
import { declOfNum } from "../../utils/locale";

type HotelProps = {
  model: HotelT;
  small?: boolean;
};

const starsCount = 5;

const Hotel = ({ model, small = false }: HotelProps) => {
  return (
    <HotelContainer>
      {small || (
        <ImageWrapper>
          <HouseImage />
        </ImageWrapper>
      )}

      <HotelContent>
        <TitleRow>
          <Name>{model.hotelName}</Name>
          <HeartWrapper>
            <Heart hotel={model} />
          </HeartWrapper>
        </TitleRow>

        <InfoRow>
          <Subtitle>
            <Date>
              <CheckInDate>{formatRussian(model.checkIn)}</CheckInDate>
              <DaysCount>
                {model.daysCount}{" "}
                {declOfNum(model.daysCount, ["день", "дня", "дней"])}
              </DaysCount>
            </Date>

            <Stars>
              {Array(starsCount)
                .fill(0)
                .map((_, index) => (
                  <Star key={index} active={index < model.stars} />
                ))}
            </Stars>
          </Subtitle>

          <PriceWrapper>
            <PriceTitle>Цена:</PriceTitle>
            <Price>
              {new Intl.NumberFormat().format(
                Number(model.priceFrom.toFixed())
              )}{" "}
              ₽
            </Price>
          </PriceWrapper>
        </InfoRow>
      </HotelContent>
    </HotelContainer>
  );
};

export default Hotel;
