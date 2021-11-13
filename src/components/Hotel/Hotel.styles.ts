import styled from "styled-components";
import { transparentize } from "polished";

export const HotelContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 16px 0;

  border-bottom: 1px ${transparentize(0.8, "#878787")} solid;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  background: ${transparentize(0.95, "#41522e")};

  margin-right: 1.5rem;
`;

export const MainInfo = styled.div`
  flex: 1;
  margin-right: 1.5rem;
  font-weight: 300;
`;

export const SecondaryInfo = styled.div`
  font-weight: 300;
`;

export const Name = styled.h4`
  font-weight: 300;
  letter-spacing: -0.4px;
`;

export const Date = styled.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 300;
`;

export const CheckInDate = styled.span``;

export const DaysCount = styled.span``;

export const Stars = styled.div`
  margin-top: 2px;
`;

export const HeartWrapper = styled.div``;

export const PriceWrapper = styled.div;

export const Price = styled.span``;
