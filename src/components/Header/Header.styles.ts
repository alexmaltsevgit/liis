import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 35px;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 2em;
`;
