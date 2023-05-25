import { RepeatOneSharp } from "@mui/icons-material";
import { baseURL } from "./baseURL";
import { toast } from "react-toastify";
export async function createBooking(bodyObj, token) {
  const options = {
    method: `POST`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyObj),
  };
  const endpoint = "/bookings";
  try {
    const response = await fetch(baseURL + endpoint, options);
    const json = await response.json();
    console.log(response);
    if (!response.ok) {
      toast.error(json.errors[0].message);
    } else {
      toast.success(
        "reservation made! check out your bookings in profile section"
      );
    }
  } catch (e) {}
}
