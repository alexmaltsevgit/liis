import styled from "styled-components";
import { transparentize } from "polished";

export const HotelContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 16px 0;

  border-bottom: 1px ${transparentize(0.8, "#878787")} solid;

  letter-spacing: -0.4px;
`;

export const ImageWrapper = styled.div`
  flex: none;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  border-radius: 50%;
  background: ${transparentize(0.95, "#41522e")};

  margin-right: 1rem;
`;

export const HotelContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.h4`
  font-weight: 300;
  letter-spacing: -0.4px;
`;

export const HeartWrapper = styled.div`
  margin: 0 10px;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Date = styled.div`
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.secondary};

  margin-top: 3px;
`;

export const CheckInDate = styled.span``;

export const DaysCount = styled.span`
  &:before {
    content: "";
    display: inline-block;
    width: 9px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text.secondary};

    margin: 0 10px 0 15px;

    vertical-align: middle;
  }
`;

export const Stars = styled.div`
  margin-top: 3px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  padding-top: 1rem;

  width: 110px;
`;

export const PriceTitle = styled.span`
  font-size: 0.6875rem;
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Price = styled.span`
  font-size: 1.375rem;
  font-weight: 400;
  line-height: 1em;
  color: ${({ theme }) => theme.colors.text.primary};
`;
