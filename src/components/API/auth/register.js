import { baseURL } from "../baseURL";
import { toast } from "react-toastify";

const endpoint = "/auth/register";
export async function registerUser(
  email,
  userName,
  password,
  avatar,
  checkedManager,
  msgApi
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
      msgApi(json.errors[i].message);
      toast.error(`${json.errors[i].message}`);
    }
  } else {
    toast.success("User Successfully created");
  }
}
