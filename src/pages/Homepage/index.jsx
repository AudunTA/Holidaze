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
/**
 * HomePage component for displaying user profile information.
 *
 * @component
 * @returns {JSX.Element} The rendered HomePage component with its content for the homepage.
 */
function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    venueApi(dispatch);
  }, []);

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
