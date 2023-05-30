import React from "react";
import { FooterContainer } from "./Footer.styled";
import * as S from "../../../styles/Text.styled";
//icons
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <FooterContainer>
      <div className="group-text">
        <S.TextWhite>Made by</S.TextWhite>
        <S.TextGrey className="spacing-left">Audun T. Anderssen</S.TextGrey>
      </div>
      <div className="group-text">
        <S.TextWhite>©</S.TextWhite>
        <S.TextGrey className="spacing-left">2023 Holidaze</S.TextGrey>
      </div>
      <div className="group-text">
        <S.TextWhite>Check out on</S.TextWhite>
        <a href="https://github.com/AudunTA/Holidaze" target="_blank">
          <GitHubIcon id="git-Icon" />
        </a>
      </div>
    </FooterContainer>
  );
}

export default Footer;
