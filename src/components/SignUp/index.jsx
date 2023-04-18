import React from "react";
import { SignUpModal } from "./SignUp.styled";
import { useState } from "react";
import { PrimaryButton } from "../../styles/Buttons.styled";
import SingUpForm from "../Forms/SignUpForm";

function SignUp() {
  const [active, setActive] = useState(false);
  const handleLogInTabClick = () => {
    setActive(true);
  };
  const handleSignUpTabClick = () => {
    setActive(false);
  };
  return (
    <SignUpModal active={active}>
      <div className="options-container">
        <div className="btn-LogIn" onClick={handleLogInTabClick}>
          <p>Log In</p>
        </div>
        <div className="btn-SignUp" onClick={handleSignUpTabClick}>
          <p>Sign Up</p>
        </div>
      </div>
      <div className="content-modal">{!active ? <SingUpForm /> : "Nice"}</div>
    </SignUpModal>
  );
}

export default SignUp;
