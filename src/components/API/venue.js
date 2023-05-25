// venue.js
import { baseURL } from "./baseURL";
import { addVenues } from "../../features/venueSlice";
import { toast } from "react-toastify";
import { deleteMyVenue } from "../../features/profileSlice";
import "react-toastify/dist/ReactToastify.css";
export async function venueApi(dispatch, num) {
  const endpoint = `/venues?sort=created&limit=100&_owner=true&_bookings=true`;
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
    console.log(response);
    if (!response.ok) {
      toast.error(`api error: ${json.errors[0].message}`);
    } else {
      toast.success("Venues has been created");
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    }
  } catch (e) {}
}

export async function deleteVenue(venueId, token, dispatch) {
  console.log(venueId, token);
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const endpoint = `/venues/${venueId}`;
  try {
    const response = await fetch(baseURL + endpoint, options);
    console.log(response);
    if (!response.ok) {
      console.log("NOT NICE");
      const errorJson = await response.json();
      console.log(errorJson);
    } else {
      toast.success("Venue deleted");
      dispatch(deleteMyVenue(venueId));
    }
  } catch (error) {
    console.log("Error occurred:", error);
  }
}
