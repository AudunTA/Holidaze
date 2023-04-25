import { React, useEffect, useState } from "react";

import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from "./Header.styled.js";
import { useDispatch, useSelector } from "react-redux";
//Logo imports
import holi from "../../assets/images/HOLID.png";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import ze from "../../assets/images/ZE.png";
// default avatar

//import button style
import { PrimaryButton } from "../../styles/Buttons.styled.js";
// SignUp modal import
import SignUp from "../SignUp/index.jsx";
//User menu import
import UserMenu from "../UserMenu/index.jsx";
function Header() {
  //show modal states
  //default is true so if user is not logged in the signup modal will be shown as default
  const [showModal, setShowModal] = useState(true);
  const [showUserMenu, setShowUserMenu] = useState(false);

  //logged in state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  //for manageing logged in user information
  const [userName, setUserName] = useState();
  const [avatar, setAvatar] = useState();

  //modal visability handeling
  const handleModalStatus = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  const logStore = () => {
    console.log(state);
  };
  const handleUserMenuStatus = () => {
    setShowUserMenu(!showUserMenu);
    console.log("nice");
  };
  const checkUserStatus = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  };
  useEffect(() => {
    window.onstorage = (event) => {
      checkUserStatus();
    };
    checkUserStatus();
  }, []);

  //if user is logged in I retrive data from local storage and set it into the states
  useEffect(() => {
    setUserName(localStorage.getItem("username"));
    setAvatar(localStorage.getItem("avatar"));
  }, [isUserLoggedIn]);
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={holi}></img>
        <Logo className="logo-a" />
        <img src={ze} className="ze"></img>
      </LogoContainer>
      <NavContainer>
        <PrimaryButton className="nav-item" onClick={logStore}>
          <p>Log store</p>
        </PrimaryButton>
        <p className="nav-item">Venues</p>
        <p className="nav-item">Contact</p>
        {isUserLoggedIn ? (
          <>
            <PrimaryButton onClick={handleUserMenuStatus}>
              <img
                src={avatar !== null ? avatar : avatar}
                className="avatar-img"
              ></img>
              <p>{userName}</p>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="arrow-down"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </PrimaryButton>
            {showUserMenu ? <UserMenu /> : ""}
          </>
        ) : (
          <>
            <PrimaryButton onClick={handleModalStatus}>
              <p>Sign Up</p>

              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="white"
                className="arrow-down"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </PrimaryButton>
            {showModal ? <SignUp /> : ""}
          </>
        )}
      </NavContainer>
    </HeaderContainer>
  );
}

export default Header;
