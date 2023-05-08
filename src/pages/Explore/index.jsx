import React from "react";
import Filters from "../../components/FIlters";
import { ExploreContainer } from "./Explore.styled";
import LoadingCards from "../../components/Cards/LoadingCards";
import DisplayCards from "../../components/Cards/DisplayCards";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { venueApi } from "../../components/API/venue";
import { useQueryParam, NumberParam } from "use-query-params";
import SearchBar from "../../components/SearchBar";
function Explore() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  //Loading state
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    venueApi(dispatch, 100);
  }, []);

  useEffect(() => {
    if (state.venues) {
      setLoader(false);
    }
  }, [state]);
  return (
    <>
      <SearchBar />
      <ExploreContainer>
        <Filters />
        {loader ? <LoadingCards number={4} /> : <DisplayCards />}
      </ExploreContainer>
    </>
  );
}

export default Explore;
