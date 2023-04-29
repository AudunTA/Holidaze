// venue.js
import { baseURL } from "./baseURL";
import { addVenues } from "../../features/venues/venueSlice";
import { json } from "react-router-dom";

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

export async function singleVenue(id) {
  const endpoint = `/venues/${id}?_bookings=true`;
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
