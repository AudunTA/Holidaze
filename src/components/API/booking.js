import { baseURL } from "./baseURL";
export async function createBooking(bodyObj, token) {
  const options = {
    method: `POST`,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bodyObj),
  };
  console.log(bodyObj);
  console.log(options);
  const endpoint = "/bookings";
  try {
    const response = fetch(baseURL + endpoint, options);
    const json = response.json();
  } catch (e) {}
}
