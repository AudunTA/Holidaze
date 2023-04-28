import { baseURL } from "../baseURL";
const endpoint = "/auth/login";
import { profileApi } from "../profile";
export async function logInUser(
  email,
  password,
  handleResponseLogIn,
  dispatch
) {
  const logInInformation = {
    email: email,
    password: password,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(logInInformation),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const response = await fetch(baseURL + endpoint, options);
  const json = await response.json();
  if (!response.ok) {
    console.log(json.errors[0].message);
    handleResponseLogIn(json.errors[0].message);
  } else {
    console.log(json);
    const username = json.name;
    const email = json.email;
    const avatar = json.avatar;
    const accessToken = json.accessToken;
    const venueManager = json.venueManager;
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("avatar", avatar);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("venueManager", venueManager);
    window.dispatchEvent(new Event("storage"));
    profileApi({
      username,
      method: "GET",
      accessToken: accessToken,
      dispatch,
    });
  }
}
