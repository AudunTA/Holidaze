import React from "react";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { FormSignUp, FormInput } from "./SignUpForm.styled";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { registerUser } from "../../API/auth/register";
import {
  emailInputValidation,
  userNameValidation,
  passwordValidation,
} from "../FormValidation/inputValidation";
function SingUpForm() {
  //Input states
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [checkedManager, setCheckedManager] = useState(false);
  //error states
  const [errorEmail, setErrorEmail] = useState("");
  const [errorUserName, setErrorUserName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [responseApi, setResponseApi] = useState("");
  const [apiStatus, setApiStatus] = useState(false);
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onUserNameChange = (event) => {
    console.log(userName);
    setUserName(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onAvatarChange = (event) => {
    setAvatar(event.target.value);
  };
  const handleManagerChange = (val) => {
    setCheckedManager(val);
  };
  //Sending user input to be validated before the API post request for registrer.
  const handleRegister = () => {
    //Sending userinputs to be validated
    //Response will eighter be empty if successful or contain the error message.
    const emailValidationResponse = emailInputValidation(email);
    const userNameValidationResponse = userNameValidation(userName);
    const passwordValidationResponse = passwordValidation(password);
    //if response returns error

    if (emailValidationResponse) {
      //setting the error to the response
      setErrorEmail(emailValidationResponse);
    } else {
      //clearing the error if no errors are found, this is important as if the user attempts more inputs the error will clear if validated.
      setErrorEmail("");
    }

    if (userNameValidationResponse) {
      setErrorUserName(userNameValidationResponse);
    } else {
      setErrorUserName("");
    }
    if (passwordValidationResponse) {
      setErrorPassword(passwordValidationResponse);
    } else {
      setErrorPassword("");
    }
    if (errorEmail) {
      console.log("HELLO");
    }
    console.log("test:", errorEmail, errorUserName, errorPassword);
    //checking if errors are clear, if userinput also checks if input fields are blank
    if (
      !errorUserName &&
      !errorEmail &&
      !errorPassword &&
      email.length > 1 &&
      password.length > 1 &&
      userName.length > 1
    ) {
      console.log("test2", email, userName, password);
      registerUser(email, userName, password, avatar, checkedManager, msgApi);
    }
  };
  const msgApi = (msg) => {
    setResponseApi(msg);
    if (msg === "User Successfully created") {
      setApiStatus(true);
    } else {
      setApiStatus(false);
    }
  };
  return (
    <FormSignUp>
      <p>
        Please Sign Up to make bookings or make a manager account to be able to
        list your venues.
      </p>
      <p>already have an account? Log In</p>
      <div className="signUp-inputs">
        <FormInput placeholder="Email" onChange={onEmailChange}></FormInput>
        {errorEmail ? <p className="error-message">{errorEmail}</p> : ""}
        <FormInput
          placeholder="Username"
          onChange={onUserNameChange}
        ></FormInput>
        {errorUserName ? <p className="error-message">{errorUserName}</p> : ""}
        <FormInput
          placeholder="Password"
          onChange={onPasswordChange}
        ></FormInput>
        {errorPassword ? <p className="error-message">{errorPassword}</p> : ""}
        <FormInput
          placeholder="Avatar (optional)"
          onChange={onAvatarChange}
        ></FormInput>
        {responseApi ? (
          <p className={apiStatus ? "success-message" : "error-message"}>
            {responseApi}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="manager-account">
        <p>Manager Account</p>
        <ReactSwitch
          className="manager-switch"
          onColor="#B1D1FD"
          onHandleColor="#4896ff"
          checkedIcon={false}
          uncheckedIcon={false}
          checked={checkedManager}
          onChange={handleManagerChange}
        />
      </div>
      <PrimaryButton onClick={handleRegister}> Sign Up </PrimaryButton>
    </FormSignUp>
  );
}

export default SingUpForm;
