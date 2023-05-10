import React from "react";
import { SignUpModal } from "./SignUp.styled";
import { useState } from "react";
import { PrimaryButton } from "../../styles/Buttons.styled";
import SingUpForm from "../Forms/SignUpForm";
import LogInForm from "../Forms/LogInForm";
import * as S from "../../styles/Text.styled";
import { MarginTopContainer } from "../../styles/Layout.styled";
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
      <SignUpModal active={active}>
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
      </SignUpModal>
    </MarginTopContainer>
  );
}

export default SignUp;
