import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import { IllustrationContainer } from "./HeroIllustration.styled";
function HeroIllustration() {
  return (
    <IllustrationContainer>
      <div className="illustration-horizontal layer-one"></div>
      <div className="illustration-horizontal layer-two"></div>
      <div className="illustration-vertical layer-three"></div>
      <div className="illustration-vertical layer-four"></div>
      <div className="illustration-vertical layer-five"></div>
      <div className="illustration-vertical layer-six"></div>
      <div className="illustration-horizontal layer-seven"></div>
      <div className="illustration-horizontal layer-eight"></div>
      <div className="logo-container">
        <Logo className="logo" />
      </div>
    </IllustrationContainer>
  );
}

export default HeroIllustration;
