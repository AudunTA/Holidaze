import { React, useEffect, useState } from "react";
//styles
import {
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from "./Header.styled.js";
import * as S from "../../../styles/Text.styled.js";
import { useDispatch, useSelector } from "react-redux";
//Logo import
import { ReactComponent as LogoSolid } from "../../../assets/images/logoSolid.svg";
//import button style
import { PrimaryButton } from "../../../styles/Buttons.styled.js";
//material ui icons
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
//User menu import
import UserMenu from "../../UserMenu/index.jsx";
import { Link } from "react-router-dom";
//auth-kit
import { useAuthUser, withAuthHeader } from "react-auth-kit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header() {
  //show modal states
  //default is true so if user is not logged in the signup modal will be shown as default
  const [showUserMenu, setShowUserMenu] = useState(false);
  //logged in state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  //for manageing logged in user information

  const [avatar, setAvatar] = useState();
  const [usrName, setUsrName] = useState();

  const auth = useAuthUser();
  const authHeader = withAuthHeader();
  //Development log states
  const state = useSelector((state) => state.venues.filteredVenues);
  const logStore = () => {
    console.log(state);
  };
  const handleUserMenuStatus = () => {
    setShowUserMenu(!showUserMenu);
  };
  useEffect(() => {
    const checkUserStatus = () => {
      if (auth()) {
        setIsUserLoggedIn(true);
        setAvatar(auth().avatar);
        setUsrName(auth().username);
      } else {
        setIsUserLoggedIn(false);
      }
    };

    checkUserStatus();
    // add event listener for storage event
    window.addEventListener("storage", checkUserStatus);

    // remove event listener on cleanup
    return () => {
      window.removeEventListener("storage", checkUserStatus);
    };
  }, [auth]);

  //if user is logged in I retrive data from local storage and set it into the states

  return (
    <>
      {" "}
      <ToastContainer autoClose={2000} />
      <HeaderContainer>
        <LogoContainer>
          <LogoSolid className="logo-a" />
          <S.LogoText>Holidaze</S.LogoText>
        </LogoContainer>
        <NavContainer>
          <Link to="/Explore">
            <p className="nav-item">Explore</p>
          </Link>
          <Link to="/Contact">
            <p className="nav-item">Contact</p>
          </Link>
          {isUserLoggedIn ? (
            <>
              <PrimaryButton onClick={handleUserMenuStatus}>
                <img
                  src={avatar !== null ? avatar : avatar}
                  className="avatar-img"
                ></img>
                <p>{usrName}</p>
                <ArrowRightIcon className="arrow-icon" />
              </PrimaryButton>
              {showUserMenu ? <UserMenu /> : ""}
            </>
          ) : (
            <>
              <Link to="/Signup">
                <PrimaryButton>
                  <p>Sign Up</p>
                </PrimaryButton>
              </Link>
            </>
          )}
        </NavContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
