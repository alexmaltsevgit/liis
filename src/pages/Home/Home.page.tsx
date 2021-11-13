import React from "react";
import { HomeContainer, Search, Favourite, Main } from "./Home.styles";
import SearchForm from "../../components/SearchForm/SearchForm.component";
import Hotels from "../../components/Hotels/Hotels.component";

const Home = () => {
  return (
    <HomeContainer>
      <Search>
        <SearchForm />
      </Search>
      <Favourite>favourite</Favourite>
      <Main>
        <Hotels />
      </Main>
    </HomeContainer>
  );
};

export default Home;
