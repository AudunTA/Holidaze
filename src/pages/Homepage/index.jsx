import React from "react";

import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/FIlters";
import { MainContainer } from "./Homepage.styled";
import LoadingCards from "../../components/LoadingCards";
function Homepage() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <MainContainer>
        <Filters />
        <LoadingCards number={9} />
      </MainContainer>
    </div>
  );
}

export default Homepage;
