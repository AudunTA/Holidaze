import React from "react";
import { SignUpModal } from "./SignUp.styled";
import { useState } from "react";

function SignUp() {
  const [active, setActive] = useState(false);
  return (
    <SignUpModal active={active}>
      <div className="options-container">
        <div className="btn-LogIn">
          <p>Log In</p>
        </div>
        <div className="btn-SignUp">
          <p>Sign Up</p>
        </div>
      </div>
      <div className="content-modal">
        <p>
          Please sign up to make bookings or make an manager account to be able
          to list your venue
        </p>
      </div>
    </SignUpModal>
  );
}

export default SignUp;
