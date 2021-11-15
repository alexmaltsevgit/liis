import React from "react";
import {
  HomeContainer,
  SearchCard,
  FavouriteCard,
  MainCard,
} from "./Home.styles";
import SearchForm from "../../components/SearchForm/SearchForm.component";
import Hotels from "../../components/Hotels/Hotels.component";
import Favourite from "../../components/Favourite/Favourite.component";

const Home = () => {
  return (
    <HomeContainer>
      <SearchCard>
        <SearchForm />
      </SearchCard>
      <FavouriteCard>
        <Favourite />
      </FavouriteCard>
      <MainCard>
        <Hotels />
      </MainCard>
    </HomeContainer>
  );
};

export default Home;
