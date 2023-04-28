import React from "react";
import Header from "../../components/Header/Index";
import { MarginWrapper } from "../../styles/Layout.styled";
import * as S from "../../styles/Text.styled";
function Venue() {
  return (
    <>
      <Header />
      <MarginWrapper>
        <S.TextWhite>HELLO THERE</S.TextWhite>
      </MarginWrapper>
    </>
  );
}

export default Venue;
