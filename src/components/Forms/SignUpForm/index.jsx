import React from "react";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { FormSignUp } from "./SignUpForm.styled";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { handleRegister } from "../../API/register";
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
  const userValidation = () => {
    if (email.length < 5) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    if (userName.length < 5) {
      setErrorUserName(true);
    } else {
      setErrorEmail(false);
    }
    handleRegister(email, userName, password, avatar, checkedManager);
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
        {errorEmail ? <p>Error</p> : ""}
        <input placeholder="Username" onChange={onUserNameChange}></input>
        {errorUserName ? <p>Error</p> : ""}
        <input placeholder="Password" onChange={onPasswordChange}></input>
        {errorPassword ? <p>Error</p> : ""}
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

      <PrimaryButton onClick={userValidation}> Sign Up </PrimaryButton>
    </FormSignUp>
  );
}

export default SingUpForm;
