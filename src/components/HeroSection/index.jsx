import React from "react";
import Header from "../Header";
import { HeroContainer } from "./HeroSection.styled";
function HeroSection() {
  return (
    <>
      <HeroContainer>
        <Header />
        <div className="hero-description">
          <div className="top-hero">
            <p>292 Venues</p>
            <p>200+ Verified managers</p>
            <p>100% Satisfaction guarantee</p>
          </div>
          <h1>Find the perfect venue with Holidaze</h1>
          <div className="bottom-hero">
            <p>Share your experience</p>
          </div>
        </div>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
