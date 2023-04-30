import { useSignIn } from "react-auth-kit";
import { baseURL } from "../baseURL";
const endpoint = "/auth/login";
import { profileApi } from "../profile";
//react router-dom
import { useNavigate } from "react-router-dom";
function useLogInUser() {
  const navigate = useNavigate();
  const signIn = useSignIn();

  async function logInUser(email, password, handleResponseLogIn, dispatch) {
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
      signIn({
        token: accessToken,
        expiresIn: 3600,
        tokenType: "Bearer",
        authState: {
          email: email,
          username: username,
          avatar: avatar,
          token: accessToken,
        },
      });
      navigate("/");
    }
  }

  return logInUser;
}

export { useLogInUser };
