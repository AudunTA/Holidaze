// venue.js
import { baseURL } from "./baseURL";
import { addVenues } from "../../features/venues/venueSlice";

export async function venueApi(dispatch) {
  const endpoint = "/venues?_owner=true&bookings=true&limit=10";
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
