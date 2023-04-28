import React from "react";
import { useState } from "react";
import { FormLogIn } from "./LogInForm.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { FormInput } from "../SignUpForm/SignUpForm.styled";
import { logInUser } from "../../API/auth/login";
import { useDispatch } from "react-redux";
function LogInForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseLogIn, setResponseLogIn] = useState("");
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleResponseLogIn = (msg) => {
    setResponseLogIn(msg);
  };
  const handleLogIn = () => {
    logInUser(email, password, handleResponseLogIn, dispatch);
  };
  return (
    <FormLogIn>
      <div className="logIn-inputs">
        <FormInput placeholder="Email" onChange={onEmailChange}></FormInput>
        <FormInput
          placeholder="Password"
          onChange={onPasswordChange}
        ></FormInput>
      </div>
      {responseLogIn ? <p className="error-message">{responseLogIn}</p> : ""}
      <PrimaryButton onClick={handleLogIn}>
        <p>Log In</p>
      </PrimaryButton>
    </FormLogIn>
  );
}

export default LogInForm;
