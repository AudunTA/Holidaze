import React from "react";
import { SearchBarContainer } from "./SearchBar.styled";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
function SearchBar() {
  return (
    <>
      <SearchBarContainer></SearchBarContainer>
      <ColorBorder className="color-border" />
    </>
  );
}

export default SearchBar;
