import React from "react";
import { SettingContainer } from "../Settings.styled";
import * as S from "../../../styles/Text.styled";
import * as I from "../../../styles/Inputs.styled";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { Theme } from "../../../styles/Theme.styled";

function EditProfile() {
  return (
    <SettingContainer>
      <ThemeProvider theme={Theme}>
        <TextField
          className="TextField-profile"
          helperText="change avatar? simply change the link and press confirm"
          label="Avatar"
          color="primary"
          fullWidth
          defaultValue="white"
          focused
        />
      </ThemeProvider>
    </SettingContainer>
  );
}

export default EditProfile;
