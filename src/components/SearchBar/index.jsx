import React from "react";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarContainer, SearchInput } from "./SearchBar.styled";
import { CenterContainer } from "../../styles/Layout.styled";
function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchInput placeholder="Search for a venue" />
      <SearchIcon id="search-icon" />
    </SearchBarContainer>
  );
}

export default SearchBar;
