import { baseURL } from "./baseURL";
const endpoint = "/auth/register";
export async function registerUser(
  email,
  userName,
  password,
  avatar,
  checkedManager,
  apiErrors
) {
  console.log(email, userName, password, avatar, checkedManager);

  const userInformation = {
    name: userName,
    email: email,
    password: password,
    avatar: avatar,
    venueManager: checkedManager,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(userInformation),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
  const request = await fetch(baseURL + endpoint, options);
  const json = await request.json();
  console.log(json.errors);
  if (!request.ok) {
    for (let i = 0; i < json.errors.length; i++) {
      apiErrors(json.errors[i].message);
    }
  }
}
