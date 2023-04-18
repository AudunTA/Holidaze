import React from "react";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { FormSignUp } from "./SignUpForm.styled";
function SingUpForm() {
  return (
    <FormSignUp>
      <p>
        Please Sign Up to make bookings or make a manager account to be able to
        list your venues.
      </p>
      <p>already have an account? Log In</p>
      <div className="signUp-inputs">
        <input placeholder="Email"></input>
        <input placeholder="Username"></input>
        <input placeholder="Password"></input>
      </div>

      <PrimaryButton> Sign Up </PrimaryButton>
    </FormSignUp>
  );
}

export default SingUpForm;
