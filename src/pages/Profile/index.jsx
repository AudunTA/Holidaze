import React from "react";
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
function Profile() {
  const state = useSelector((state) => state.profile);
  console.log(state);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showMyBookings, setShowMyBookings] = useState(false);
  const [showMyVenues, setShowMyVenues] = useState(false);
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
    {
      name: "See my venues",
      component: <MyVenues />,
      show: showMyVenues,
      setShow: setShowMyVenues,
    },
  ];
  return (
    <>
      <Header />
      <SearchBar />
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
            <>
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
            </>
          );
        })}
      </ProfileContainer>
    </>
  );
}

export default Profile;
