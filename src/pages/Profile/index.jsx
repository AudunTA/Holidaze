import React, { useEffect } from "react";
import Header from "../../components/Header/Index";
import SearchBar from "../../components/SearchBar";
import {
  ProfileContainer,
  MarginWrapper,
  AvatarImage,
  ButtonSettings,
} from "./Profile.styled";
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

//auth-kit
import { useAuthUser } from "react-auth-kit";

function Profile() {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.profile);
  console.log(state);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showMyBookings, setShowMyBookings] = useState(false);
  const [showMyVenues, setShowMyVenues] = useState(false);
  const [showCreateVenue, setShowCreateVenue] = useState(false);
  const [isManager, setIsManager] = useState(false);

  useEffect(() => {
    if (auth()) {
      console.log(auth().username);
      profileApi({
        username,
        method: "GET",
        accessToken: token,
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
    <>
      <Header />

      <ProfileContainer>
        <MarginWrapper>
          <div className="top-section-profile">
            <div className="wrapper-profile-info">
              <AvatarImage src={state.profile.avatar}></AvatarImage>
              <div className="margin-left">
                <S.TextWhite>{state.profile.name}</S.TextWhite>
                <S.TextGrey>{state.profile.email}</S.TextGrey>
              </div>
            </div>
            <PrimaryButton>
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
        {isManager ? (
          adminSettings.map((ele) => {
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
        ) : (
          <div>Non-manager content</div>
        )}
      </ProfileContainer>
    </>
  );
}

export default Profile;
