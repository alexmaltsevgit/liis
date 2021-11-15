import styled from "styled-components";
import HotelsList from "../HotelsList/HotelsList.component";

export const FavouriteContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h3`
  margin-bottom: 2rem;
  font-weight: 500;
`;

export const StyledHotelsList = styled(HotelsList)`
  margin-top: 1.25rem;
`;
