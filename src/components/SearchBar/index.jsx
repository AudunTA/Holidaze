import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBarContainer,
  SearchInput,
  BackGroundSearch,
} from "./SearchBar.styled";
import { addSearch, applyFilter } from "../../features/venueSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
/**
 * SearchBar component .
 *
 * @component
 * @returns {JSX.Element} The rendered SearchBar.
 */
function SearchBar() {
  const searchState = useSelector((state) => state.venues.filter.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /**
   * Handles the search input change.
   *
   * @param {object} e - The event object.
   * @returns {void}
   */
  const handleSearch = (e) => {
    dispatch(addSearch(e.target.value));
  };

  /**
   * Applies the search filter and navigates to the explore page with the search query.
   */
  const handleApplySearch = () => {
    dispatch(applyFilter());
    navigate(`/Explore?search=${searchState}`);
  };
  return (
    <BackGroundSearch>
      <SearchBarContainer>
        <SearchInput placeholder="Search venues.." onChange={handleSearch} />
        <SearchIcon id="search-icon" onClick={handleApplySearch} />
      </SearchBarContainer>
    </BackGroundSearch>
  );
}

export default SearchBar;
