import React from "react";
import Filters from "../../components/FIlters";
import { ExploreContainer } from "./Explore.styled";
import LoadingCards from "../../components/Cards/LoadingCards";
import DisplayCards from "../../components/Cards/DisplayCards";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { venueApi } from "../../components/API/venue";
import { useQueryParam, NumberParam } from "use-query-params";
function Explore() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  //Loading state
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    venueApi(dispatch);
  }, []);

  useEffect(() => {
    if (state.venues.length > 1) {
      setLoader(false);
    }
  }, [state]);
  return (
    <ExploreContainer>
      <Filters />
      {loader ? <LoadingCards number={4} /> : <DisplayCards />}
    </ExploreContainer>
  );
}

export default Explore;
