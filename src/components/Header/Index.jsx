import React from "react";
import { useState } from "react";
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from "./Header.styled.js";
//Logo imports
import holi from "../../assets/images/HOLID.png";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import ze from "../../assets/images/ZE.png";

//import button style
import { PrimaryButton } from "../../styles/Buttons.styled.js";
// SignUp modal import
import SignUp from "../SignUp/index.jsx";
function Header() {
  const [showModal, setShowModal] = useState(true);

  const handleModalStatus = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <HeaderContainer>
        <LogoContainer>
          <img src={holi}></img>
          <Logo className="logo-a" />
          <img src={ze} className="ze"></img>
        </LogoContainer>
        <NavContainer>
          <p className="nav-margin">Venues</p>
          <p className="nav-margin">Contact</p>
          <PrimaryButton onClick={handleModalStatus}>
            <p>Sign Up</p>

            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="white"
              className="arrow-down"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </PrimaryButton>
          {showModal ? <SignUp /> : ""}
        </NavContainer>
      </HeaderContainer>
    </div>
  );
}

export default Header;
