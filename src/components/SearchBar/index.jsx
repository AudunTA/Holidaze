import React from "react";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
import SearchIcon from "@mui/icons-material/Search";
import { SearchBarContainer } from "./SearchBar.styled";
import { CenterContainer } from "../../styles/Layout.styled";
function SearchBar() {
  return (
    <SearchBarContainer>
      <div className="search-icon-container">
        <SearchIcon id="search-icon" />
      </div>
    </SearchBarContainer>
  );
}

export default SearchBar;
