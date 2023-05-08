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
//lodash
import _ from "lodash";
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

      const filteredData = _.filter(state.venues, (item) => {
        return (
          item.maxGuests >= 3 &&
          item.name.includes("Shelter") &&
          item.meta.wifi === false &&
          item.meta.parking === false &&
          item.meta.breakfast === false &&
          item.meta.pets === false
        );
      });
      console.log(filteredData);
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
