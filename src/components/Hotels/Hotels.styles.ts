import styled from "styled-components";
import Carousel from "../Carousel/Carousel.component";
import HotelsList from "../HotelsList/HotelsList.component";

export const HotelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Gallery = styled(Carousel)`
  margin-top: 28px;
`;

export const FavouriteCounter = styled.div`
  margin-top: 28px;
  font-weight: 300;

  span {
    margin-left: 3px;
    font-weight: 500;
  }
`;

export const StyledHotelsList = styled(HotelsList)`
  margin-top: 20px;
`;
