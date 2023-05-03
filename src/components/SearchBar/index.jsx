import React from "react";
import { ReactComponent as ColorBorder } from "../../assets/images/colorBorder.svg";
import { TextField, styled } from "@mui/material";
import { CenterContainer } from "../../styles/Layout.styled";
function SearchBar() {
  const StyledSearchField = styled(TextField)({
    margin: "10px auto",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--text-color-main)",
      backgroundColor: "var(--text-color-highlight)",
    },
    "& .MuiInputBase-input": {
      color: "var(--text-color-main)",
    },
  });

  return (
    <CenterContainer>
      <StyledSearchField
        //borderColor="white"
        label="Search title"
        sx={{
          margin: "10px auto",
          background: "",
          width: "100%",
        }}
      />
      <ColorBorder className="color-border" />
    </CenterContainer>
  );
}

export default SearchBar;
