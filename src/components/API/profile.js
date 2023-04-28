import { baseURL } from "./baseURL";
import { addProfile } from "../../features/profile/profileSlice";

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
      console.log("Inneeeeeeeeeeeee");
      dispatch(addProfile(json));
    }
  } catch (e) {}
}

export { profileApi };
