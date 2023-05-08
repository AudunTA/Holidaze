// Homepage.jsx
import React, { useEffect } from "react";
import HeroSection from "../../components/HeroSection";
import SearchBar from "../../components/SearchBar";
import Filters from "../../components/Filters";
import { MainContainer } from "./Homepage.styled";
import LoadingCards from "../../components/Cards/LoadingCards";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { venueApi } from "../../components/API/venue";
import DisplayCards from "../../components/Cards/DisplayCards";
import Header from "../../components/Layout/Header/Index";
import { TextField } from "@mui/material";
import Footer from "../../components/Layout/Footer";
function Homepage() {
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);

  useEffect(() => {
    venueApi(dispatch, 8);
  }, []);

  useEffect(() => {
    //console.log("state ", state.venues);
    //console.log(loader);
    if (state.venues) {
      setLoader(false);
    }
  }, [state]);

  return (
    <div>
      <HeroSection />
      <SearchBar />
      <MainContainer>
        <Filters />
        {loader ? <LoadingCards number={4} /> : <DisplayCards />}
      </MainContainer>
    </div>
  );
}

export default Homepage;
