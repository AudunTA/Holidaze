import React from "react";
import { MobileBarContainer, WrapperNavOptions } from "./MobileBar.styled";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as S from "../../../styles/Text.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { useState, useEffect } from "react";
import defaultProfile from "../../../assets/images/defaultprofile.jpg";
import { Link } from "react-router-dom";
//auth-kit
import { useAuthUser, withAuthHeader } from "react-auth-kit";
function MobileBar() {
  const auth = useAuthUser();
  const authHeader = withAuthHeader();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState();
  const [usrName, setUsrName] = useState();

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
    <MobileBarContainer>
      <div className="flex-icons">
        <Link to={"/Explore"}>
          <WrapperNavOptions>
            <MapsHomeWorkIcon className="icon-mobile-nav" />
            <S.TextMobileNav>Explore</S.TextMobileNav>
          </WrapperNavOptions>
        </Link>

        {isUserLoggedIn ? (
          <Link to={"/Profile"}>
            <WrapperNavOptions>
              <img
                src={avatar ? avatar : defaultProfile}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = defaultProfile;
                }}
                className="avatar-mobile-nav"
              ></img>
              <S.TextMobileNav>{usrName}</S.TextMobileNav>
            </WrapperNavOptions>
          </Link>
        ) : (
          <Link to={"/SignUp"}>
            <WrapperNavOptions>
              <AccountCircleIcon className="icon-mobile-nav" />
              <S.TextMobileNav>Log In</S.TextMobileNav>
            </WrapperNavOptions>
          </Link>
        )}
      </div>
    </MobileBarContainer>
  );
}

export default MobileBar;
