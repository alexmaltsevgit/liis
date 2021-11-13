import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 35px;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
`;
