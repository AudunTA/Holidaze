import React from "react";

import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import { MainContainer, TestDiv } from "./Homepage.styled";
import LoadingCards from "../../components/LoadingCards";
import { useState } from "react";
function Homepage() {
  const [loader, setLoader] = useState(true);
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <MainContainer>
        <Filters />
        {loader ? <LoadingCards number={1} /> : ""}
      </MainContainer>
    </div>
  );
}

export default Homepage;
