import styled from "styled-components";
import Container from "../../components/Container/Container.component";
import Card from "../../components/Card/Card.component";

export const HomeContainer = styled(Container)`
  display: grid;
  grid-template:
    "search main" auto
    "favourite main" minmax(0, 1fr) /
    minmax(auto, 360px) auto;

  flex: 1;
  height: 0;

  grid-gap: 1.5rem;

  padding-bottom: 30px;

  @media screen and ${({ theme }) => theme.breakpoints.md} {
    grid-template:
      "search search" auto
      "favourite favourite" auto
      "main main" auto /
      auto auto;
  } ;
`;

export const SearchCard = styled(Card)`
  grid-area: search;
`;

export const FavouriteCard = styled(Card)`
  grid-area: favourite;
`;

export const MainCard = styled(Card)`
  grid-area: main;
`;
