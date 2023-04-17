import { ReactComponent as HeroBanner } from "../../assets/images/herobanner.svg";
import React from "react";
import Header from "../Header";
import { HeroContainer } from "./HeroSection.styled";
function HeroSection() {
  return (
    <>
      <HeroContainer>
        <Header className="header-e" />
      </HeroContainer>
    </>
  );
}

export default HeroSection;
