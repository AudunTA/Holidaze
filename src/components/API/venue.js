// venue.js
import { baseURL } from "./baseURL";
import { addVenues } from "../../features/venueSlice";
export async function venueApi(dispatch, num) {
  const endpoint = `/venues?sort=created&limit=${num}&_owner=true&_bookings=true&offset=5`;
  try {
    console.log(baseURL + endpoint);
    const response = await fetch(baseURL + endpoint);
    const json = await response.json();
    console.log(json);
    dispatch(addVenues(json));
    console.log(dispatch);
  } catch (e) {
    console.log(e);
  }
}

export async function singleVenue(id) {
  const endpoint = `/venues/${id}?_bookings=true&_owner=true`;
  try {
    const response = await fetch(baseURL + endpoint);
    const json = await response.json();
    if (response.ok) {
      console.log(json);
      return json;
    } else {
      throw Error;
    }
  } catch (e) {}
}

export async function createVenueApi(method, accessToken, bodyObj) {
  const endpoint = `/venues`;
  console.log(bodyObj);
  const options = {
    method: `${method}`,
    body: JSON.stringify(bodyObj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };
  try {
    console.log(options);
    const response = await fetch(baseURL + endpoint, options);
    const json = await response.json();
    console.log(json);
  } catch (e) {}
}
