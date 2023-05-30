import React from "react";
import Filters from "../../components/FIlters";
import { ExploreContainer } from "./Explore.styled";
import DisplayCards from "../../components/Cards/DisplayCards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { venueApi } from "../../components/API/venue";
import SearchBar from "../../components/SearchBar";

/**
 * Explore component .
 *
 * @component
 * @returns {JSX.Element} The rendered Explore component with its child-components.
 */
function Explore() {
  const dispatch = useDispatch();
  useEffect(() => {
    venueApi(dispatch);
  }, []);

  return (
    <>
      <SearchBar />
      <ExploreContainer>
        <Filters />
        <DisplayCards />
      </ExploreContainer>
    </>
  );
}

export default Explore;
