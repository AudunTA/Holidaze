import React from "react";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBarContainer,
  SearchInput,
  BackGroundSearch,
} from "./SearchBar.styled";
function SearchBar() {
  return (
    <BackGroundSearch>
      <SearchBarContainer>
        <SearchInput placeholder="Search for a venue" />
        <SearchIcon id="search-icon" />
      </SearchBarContainer>
    </BackGroundSearch>
  );
}

export default SearchBar;
