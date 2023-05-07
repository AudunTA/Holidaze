import React from "react";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
import SearchIcon from "@mui/icons-material/Search";
import {
  SearchBarContainer,
  SearchInput,
  BackGroundSearch,
} from "./SearchBar.styled";
import { useDispatch } from "react-redux";
import { addSearch } from "../../features/filterSlice";
function SearchBar() {
  const dispatch = useDispatch();
  return (
    <BackGroundSearch>
      <SearchBarContainer>
        <SearchInput
          placeholder="Search venues.."
          onChange={(e) => dispatch(addSearch(e.target.value))}
        />
        <SearchIcon id="search-icon" />
      </SearchBarContainer>
    </BackGroundSearch>
  );
}

export default SearchBar;
