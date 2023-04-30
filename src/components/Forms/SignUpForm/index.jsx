import React from "react";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { FormSignUp } from "./SignUpForm.styled";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { registerUser } from "../../API/auth/register";
import {
  emailInputValidation,
  userNameValidation,
  passwordValidation,
} from "../FormValidation/inputValidation";
import * as S from "../../../styles/Text.styled";
import { FormInput } from "./SignUpForm.styled";
import { UserInput } from "../../../styles/Inputs.styled";
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
  const [errorApi, setErrorApi] = useState("");
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
    let validEmail = false;
    let validUserName = false;
    let validPassword = false;
    if (emailValidationResponse) {
      //setting the error to the response
      setErrorEmail(emailValidationResponse);
    } else {
      //clearing the error if no errors are found, this is important as if the user attempts more inputs the error will clear if validated.
      setErrorEmail("");
      validEmail = true;
    }

    if (userNameValidationResponse) {
      setErrorUserName(userNameValidationResponse);
    } else {
      setErrorUserName("");
      validUserName = true;
    }
    if (passwordValidationResponse) {
      setErrorPassword(passwordValidationResponse);
    } else {
      setErrorPassword("");
      validPassword = true;
    }
    if (errorEmail) {
      console.log("HELLO");
    }
    console.log("test:", errorEmail, errorUserName, errorPassword);
    if (validEmail && validUserName && validPassword) {
      console.log("test2", email, userName, password);
      //Now the inputs are validated and i send it to the registerUser function
      //i also send the apiError as a prop so i can display the error from this module to the user interface.
      registerUser(
        email,
        userName,
        password,
        avatar,
        checkedManager,
        apiErrors
      );
    }
  };
  //api error that is sent as a prop to the api method.
  const apiErrors = (error) => {
    setErrorApi(error);
  };
  return (
    <FormSignUp>
      <S.TextWhite>
        Please Sign Up to make bookings or make a manager account to be able to
        list your venues.
      </S.TextWhite>
      <S.TextWhite>already have an account? Log In</S.TextWhite>
      <div className="signUp-inputs">
        <UserInput placeholder="Email" onChange={onEmailChange}></UserInput>
        {errorEmail ? <S.TextError>{errorEmail}</S.TextError> : ""}
        <UserInput
          placeholder="Username"
          onChange={onUserNameChange}
        ></UserInput>
        {errorUserName ? <S.TextError>{errorUserName}</S.TextError> : ""}
        <UserInput
          placeholder="Password"
          onChange={onPasswordChange}
        ></UserInput>
        {errorPassword ? <S.TextError>{errorPassword}</S.TextError> : ""}
        <UserInput
          placeholder="Avatar (optional)"
          onChange={onAvatarChange}
        ></UserInput>
        {errorApi ? <S.TextError>{errorApi}</S.TextError> : ""}
      </div>
      <div className="manager-account">
        <S.SubHeading className="manager-margin">Manager Account</S.SubHeading>
        <ReactSwitch
          className="manager-switch"
          onColor="#B1D1FD"
          height={20}
          width={40}
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
