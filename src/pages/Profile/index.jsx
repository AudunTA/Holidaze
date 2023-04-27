import React from "react";
import Header from "../../components/Header/Index";
import SearchBar from "../../components/SearchBar";
import { ProfileContainer, MarginWrapper } from "./Profile.styled";
import { useSelector } from "react-redux";
function Profile() {
  const state = useSelector((state) => state.profile);
  console.log(state);
  return (
    <>
      <Header />
      <SearchBar />
      <ProfileContainer>
        <MarginWrapper>
          <div className="top-section-profile">
            <img
              src={state.profile.avatar}
              className="img-profile-avatar"
            ></img>
            <div className="wrapper-name">
              {state.profile.venueManager ? (
                <p className="light-text">Manager</p>
              ) : (
                <p className="light-text"></p>
              )}
              <p>{state.profile.name}</p>
            </div>
          </div>
        </MarginWrapper>
      </ProfileContainer>
    </>
  );
}

export default Profile;
