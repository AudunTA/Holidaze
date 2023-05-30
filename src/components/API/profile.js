import { baseURL } from "./baseURL";
import { addProfile, updateAvatar } from "../../features/profileSlice";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
async function profileApi({ username, method, accessToken, dispatch }) {
  const endpoint = `/profiles/${username}?_bookings=true&_venues=true`;
  const options = {
    method: `${method}`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    const response = await fetch(baseURL + endpoint, options);
    const json = await response.json();
    if (!response.ok) {
      throw Error;
    } else {
      dispatch(addProfile(json));
    }
  } catch (e) {
    toast.error("error: ", e);
  }
}

async function changeAvatar(username, newAvatar, token, dispatch) {
  const endpoint = `/profiles/${username}/media`;
  const bodyObj = {
    avatar: newAvatar,
  };
  const options = {
    method: `PUT`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyObj),
  };
  try {
    const response = await fetch(baseURL + endpoint, options);
    if (!response.ok) {
      const json = await response.json();
      toast.error(`api responeded with: ${json.errors[0].message}`);
    } else {
      toast.success("Avatar updated!");
      //update avatar in profile state
      dispatch(updateAvatar(newAvatar));
      //update local storage.
      const authState = JSON.parse(localStorage.getItem("_auth_state"));
      authState.avatar = newAvatar;
      localStorage.setItem("_auth_state", JSON.stringify(authState));
    }
  } catch (e) {
    toast.error("error: ", e);
  }
}
export { profileApi, changeAvatar };
