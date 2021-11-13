import styled from "styled-components";
import { ReactComponent as ArrowSVG } from "../../../images/arrow.svg";

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1.5rem;
  align-items: center;
  margin-top: 1rem;
`;

export const Arrow = styled(ArrowSVG)``;

export const Title = styled.h2`
  margin-right: 1em;

  ${Arrow} {
    margin: 0 20px;
  }
`;

export const CheckInDate = styled.h3``;
