import React from "react";
import { FooterContainer } from "./Footer.styled";
import * as S from "../../../styles/Text.styled";
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
        <S.TextWhite>Design prototype:</S.TextWhite>
        <S.TextGrey className="spacing-left">Figma</S.TextGrey>
      </div>
    </FooterContainer>
  );
}

export default Footer;
