import React from "react";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBarContainer,
  SearchInput,
  BackGroundSearch,
} from "./SearchBar.styled";
import { addSearch, applyFilter } from "../../features/venueSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const searchState = useSelector((state) => state.venues.filter.search);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(addSearch(e.target.value));
  };
  const handleApplySearch = () => {
    dispatch(applyFilter());
    navigate(`/Explore?seach=${searchState}`);
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
