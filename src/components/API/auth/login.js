import { baseURL } from "../baseURL";
const endpoint = "/auth/login";

export async function logInUser(email, password, handleResponseLogIn) {
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
    localStorage.setItem("username", json.name);
    localStorage.setItem("email", json.email);
    localStorage.setItem("accessToken", json.accessToken);
    localStorage.setItem("venueManager", json.venueManager);
    console.log("inne");
  }
}
