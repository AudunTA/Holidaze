import React from "react";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { FormSignUp } from "./SignUpForm.styled";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { handleRegister } from "../../API/register";
import {
  emailInputValidation,
  userNameValidation,
  passwordValidation,
} from "./FormValidation/inputValidation";
function SingUpForm() {
  //Input states
  const [email, setEmail] = useState();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [checkedManager, setCheckedManager] = useState(false);
  //error states
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
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
  const handleRegistrer = () => {
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
  };
  return (
    <FormSignUp>
      <p>
        Please Sign Up to make bookings or make a manager account to be able to
        list your venues.
      </p>
      <p>already have an account? Log In</p>
      <div className="signUp-inputs">
        <input placeholder="Email" onChange={onEmailChange}></input>
        {errorEmail ? <p className="error-message">{errorEmail}</p> : ""}
        <input placeholder="Username" onChange={onUserNameChange}></input>
        {errorUserName ? <p className="error-message">{errorUserName}</p> : ""}
        <input placeholder="Password" onChange={onPasswordChange}></input>
        {errorPassword ? <p className="error-message">{errorPassword}</p> : ""}
        <input
          placeholder="Avatar (optional)"
          onChange={onAvatarChange}
        ></input>
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

      <PrimaryButton onClick={handleRegistrer}> Sign Up </PrimaryButton>
    </FormSignUp>
  );
}

export default SingUpForm;
