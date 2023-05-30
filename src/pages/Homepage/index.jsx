// Homepage.jsx
import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import { MainContainer } from "./Homepage.styled";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { venueApi } from "../../components/API/venue";
import HomePageCards from "../../components/Cards/HomePageCards";
import BrowseVenues from "../../components/BrowseVenues";
import { MarginBottomContainer } from "../../styles/Layout.styled";
function Homepage() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);

  useEffect(() => {
    venueApi(dispatch);
  }, []);

  useEffect(() => {
    //console.log("state ", state.venues);
    //console.log(loader);
    if (state.venues) {
      setLoader(false);
    }
  }, [state]);

  return (
    <MarginBottomContainer>
      <HeroSection />
      <SearchBar />

      <MainContainer>
        <HomePageCards />
      </MainContainer>
      <BrowseVenues />
    </MarginBottomContainer>
  );
}

export default Homepage;
