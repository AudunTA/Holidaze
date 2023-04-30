// venue.js
import { baseURL } from "./baseURL";
import { addVenues } from "../../features/venues/venueSlice";
import { json } from "react-router-dom";

export async function venueApi(dispatch) {
  const endpoint = "/venues?sort=created&limit=10&_owner=true&_bookings=true";
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
