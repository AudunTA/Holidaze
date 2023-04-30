import React from "react";
import Header from "../Header";
import { HeroContainer } from "./HeroSection.styled";
import HeroIllustration from "./HeroIllustration";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
//text styles
import * as S from "../../styles/Text.styled";
function HeroSection() {
  return (
    <>
      <HeroContainer>
        <div className="wrapper-hero">
          <div className="hero-description">
            <div className="top-hero">
              <S.TextGrey>292 Venues</S.TextGrey>
              <S.TextGrey>200+ Verified managers</S.TextGrey>
              <S.TextGrey>100% Satisfaction guarantee</S.TextGrey>
            </div>
            <S.Heading>Find the perfect venue with Holidaze</S.Heading>
            <div className="bottom-hero ">
              <FacebookIcon className="icon-hero" />
              <InstagramIcon className="icon-hero" />
              <TwitterIcon className="icon-hero" />
              <S.TextGrey>Share your experience</S.TextGrey>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
