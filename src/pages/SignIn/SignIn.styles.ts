import styled from "styled-components";
import { Card } from "../../components/Card/Card.styles";

export const SignInContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 20px;
`;

export const SignInCard = styled(Card)`
  z-index: 10;
  width: 100%;
  max-width: 410px;
`;

export const Title = styled.h3`
  align-self: center;
  text-align: center;
`;
