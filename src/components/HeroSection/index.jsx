import React from "react";
import Header from "../Header";
import { HeroContainer } from "./HeroSection.styled";
import HeroIllustration from "./HeroIllustration";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
function HeroSection() {
  return (
    <>
      <HeroContainer>
        <Header />
        <div className="wrapper-hero">
          <div className="hero-description">
            <div className="top-hero">
              <p>292 Venues</p>
              <p>200+ Verified managers</p>
              <p>100% Satisfaction guarantee</p>
            </div>
            <h1>Find the perfect venue with Holidaze</h1>
            <div className="bottom-hero ">
              <FacebookIcon className="icon-hero" />
              <InstagramIcon className="icon-hero" />
              <TwitterIcon className="icon-hero" />
              <p>Share your experience</p>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
