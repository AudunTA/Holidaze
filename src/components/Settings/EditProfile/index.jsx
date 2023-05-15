import React from "react";
import { SettingContainer } from "../Settings.styled";
import * as S from "../../../styles/Text.styled";
import * as I from "../../../styles/Inputs.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import { useState } from "react";
import { changeAvatar } from "../../API/profile";
import { useAuthUser } from "react-auth-kit";
import { useDispatch } from "react-redux";
function EditProfile() {
  const auth = useAuthUser();
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState("");

  const onChangeAvatar = (event) => {
    setAvatar(event.target.value);
  };
  const handleNewAvatar = () => {
    changeAvatar(auth().username, avatar, auth().token, dispatch);
  };
  return (
    <SettingContainer>
      <I.UserInput
        placeholder="Edit Avatar (leave blank to remove current avatar)"
        value={avatar}
        onChange={onChangeAvatar}
      ></I.UserInput>
      <PrimaryButton onClick={handleNewAvatar}>Save Changes</PrimaryButton>
    </SettingContainer>
  );
}

export default EditProfile;
