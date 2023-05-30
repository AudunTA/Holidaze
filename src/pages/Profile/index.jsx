import React, { useEffect } from "react";
import SearchBar from "../../components/SearchBar";
import {
  ProfileContainer,
  MarginWrapper,
  AvatarImage,
  ButtonSettings,
} from "./Profile.styled";
//styles and icons
import { MarginBottomContainer } from "../../styles/Layout.styled";
import defaultprofile from "../../assets/images/defaultprofile.jpg";
import * as S from "../../styles/Text.styled";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSelector } from "react-redux";
import { PrimaryButton } from "../../styles/Buttons.styled";
import SmoothCollapse from "react-smooth-collapse";
import { useState } from "react";
//settings components
import EditProfile from "../../components/Settings/EditProfile";
import MyVenues from "../../components/Settings/MyVenues";
import MyBookings from "../../components/Settings/MyBookings";
import CreateVenue from "../../components/Settings/CreateVenue";
import { profileApi } from "../../components/API/profile";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//auth-kit
import { useAuthUser, useSignOut } from "react-auth-kit";

/**
 * Profile component for displaying user profile information.
 *
 * @component
 * @returns {JSX.Element} The rendered Profile component with user options and information.
 */
function Profile() {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);
  const navigate = useNavigate();
  console.log(state);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showMyBookings, setShowMyBookings] = useState(false);
  const [showMyVenues, setShowMyVenues] = useState(false);
  const [showCreateVenue, setShowCreateVenue] = useState(false);
  const [isManager, setIsManager] = useState(false);

  /**
   * Handles the logout functionality by clearing the local storage and reloading the page.
   */
  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  useEffect(() => {
    if (auth()) {
      console.log(auth().username);
      profileApi({
        username: auth().username,
        method: "GET",
        accessToken: auth().token,
        dispatch,
      });
    }
  }, []);

  const settings = [
    {
      name: "Edit profile",
      component: <EditProfile />,
      show: showEditProfile,
      setShow: setShowEditProfile,
    },
    {
      name: "My bookings",
      component: <MyBookings />,
      show: showMyBookings,
      setShow: setShowMyBookings,
    },
  ];
  const adminSettings = [
    {
      name: "Create a venue",
      component: <CreateVenue />,
      show: showCreateVenue,
      setShow: setShowCreateVenue,
    },
    {
      name: "See my venues",
      component: <MyVenues />,
      show: showMyVenues,
      setShow: setShowMyVenues,
    },
  ];

  useEffect(() => {
    console.log(state.profile.venueManager);
    if (state.profile.venueManager) {
      setIsManager(true);
    }
  }, [state]);

  return (
    <MarginBottomContainer>
      <ProfileContainer>
        <MarginWrapper>
          <div className="top-section-profile">
            <div className="wrapper-profile-info">
              <AvatarImage
                src={
                  state.profile.avatar ? state.profile.avatar : defaultprofile
                }
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = defaultprofile;
                }}
              ></AvatarImage>
              <div className="margin-left">
                <S.TextWhite>{state.profile.name}</S.TextWhite>
                <S.TextGrey>{state.profile.email}</S.TextGrey>
              </div>
            </div>
            <PrimaryButton onClick={handleLogOut}>
              <p>Log out</p>
            </PrimaryButton>
          </div>
        </MarginWrapper>
        {settings.map((ele) => {
          return (
            <div key={ele.name}>
              {" "}
              <ButtonSettings
                active={ele.show}
                key={ele.name}
                onClick={() => {
                  ele.setShow(!ele.show);
                }}
              >
                <S.TextWhite>{ele.name}</S.TextWhite>
                {ele.show ? (
                  <ArrowDropUpIcon className="arrow-icon" />
                ) : (
                  <ArrowRightIcon className="arrow-icon" />
                )}
              </ButtonSettings>
              <SmoothCollapse expanded={ele.show}>
                {ele.component}
              </SmoothCollapse>
            </div>
          );
        })}
        {isManager
          ? adminSettings.map((ele) => {
              return (
                <div key={ele.name}>
                  {" "}
                  <ButtonSettings
                    active={ele.show}
                    key={ele.name}
                    onClick={() => {
                      ele.setShow(!ele.show);
                    }}
                  >
                    <S.TextWhite>{ele.name}</S.TextWhite>
                    {ele.show ? (
                      <ArrowDropUpIcon className="arrow-icon" />
                    ) : (
                      <ArrowRightIcon className="arrow-icon" />
                    )}
                  </ButtonSettings>
                  <SmoothCollapse expanded={ele.show}>
                    {ele.component}
                  </SmoothCollapse>
                </div>
              );
            })
          : ""}
      </ProfileContainer>
    </MarginBottomContainer>
  );
}

export default Profile;
