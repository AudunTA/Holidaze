import React from "react";

import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/FIlters";
function Homepage() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <Filters />
    </div>
  );
}

export default Homepage;
