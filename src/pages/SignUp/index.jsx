import React from "react";
import { SignUpContainer, BackGroundImg } from "./SignUp.styled";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { useState } from "react";
import * as S from "../../styles/Text.styled";
import LogInForm from "../../components/Forms/LogInForm";
import SingUpForm from "../../components/Forms/SignUpForm";
import { MarginWrapper } from "../../styles/Layout.styled";
import { MarginTopContainer } from "../../styles/Layout.styled";
/**
 * SignUp component for displaying user profile information.
 *
 * @component
 * @returns {JSX.Element} The rendered SignUp component with options for login / signup.
 */
function SignUp() {
  const [active, setActive] = useState(false);
  const handleLogInTabClick = () => {
    setActive(true);
  };
  const handleSignUpTabClick = () => {
    setActive(false);
  };
  return (
    <MarginTopContainer>
      <SignUpContainer active={active}>
        <MarginWrapper>
          <div className="illustration-horizontal layer-one"></div>
          <div className="illustration-horizontal layer-two"></div>
          <div className="illustration-vertical layer-three"></div>
          <div className="illustration-vertical layer-four"></div>
          <div className="illustration-vertical layer-five"></div>
          <div className="illustration-vertical layer-six"></div>
          <div className="illustration-horizontal layer-seven"></div>
          <div className="illustration-horizontal layer-eight"></div>
          <div className="options-container">
            <div className="btn-LogIn" onClick={handleLogInTabClick}>
              <S.TextWhite>Log In</S.TextWhite>
            </div>
            <div className="btn-SignUp" onClick={handleSignUpTabClick}>
              <S.TextWhite>Sign Up</S.TextWhite>
            </div>
          </div>
          <div className="content-modal">
            {!active ? <SingUpForm /> : <LogInForm />}
          </div>
        </MarginWrapper>
      </SignUpContainer>
    </MarginTopContainer>
  );
}

export default SignUp;
