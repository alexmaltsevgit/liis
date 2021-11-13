import React from "react";
import { HomeContainer, Search, Favourite, Main } from "./Home.styles";
import SearchForm from "../../components/SearchForm/SearchForm.component";

const Home = () => {
  return (
    <HomeContainer>
      <Search>
        <SearchForm />
      </Search>
      <Favourite>favourite</Favourite>
      <Main>main</Main>
    </HomeContainer>
  );
};

export default Home;
