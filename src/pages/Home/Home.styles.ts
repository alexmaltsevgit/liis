import styled from "styled-components";
import Container from "../../components/Container/Container.component";
import Card from "../../components/Card/Card.component";

export const HomeContainer = styled(Container)`
  display: grid;
  grid-template:
    "search main" auto
    "favourite main" auto /
    minmax(auto, 360px) auto;

  grid-gap: 1.5rem;

  @media screen and ${({ theme }) => theme.breakpoints.md} {
    grid-template:
      "search search" auto
      "favourite favourite" auto
      "main main" auto /
      auto auto;
  } ;
`;

export const Search = styled(Card)`
  grid-area: search;
`;

export const Favourite = styled(Card)`
  grid-area: favourite;
`;

export const Main = styled(Card)`
  grid-area: main;
`;
