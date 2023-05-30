// venue.js
import { baseURL } from "./baseURL";
import { addVenues } from "../../features/venueSlice";
import { toast } from "react-toastify";
import { deleteMyVenue } from "../../features/profileSlice";
import "react-toastify/dist/ReactToastify.css";
export async function venueApi(dispatch) {
  const endpoint = `/venues?sort=created&limit=100&_owner=true&_bookings=true`;
  try {
    const response = await fetch(baseURL + endpoint);
    const json = await response.json();
    dispatch(addVenues(json));
  } catch (e) {
    //error handeling
    console.log(e);
    toast.error(e);
  }
}

export async function singleVenue(id) {
  const endpoint = `/venues/${id}?_bookings=true&_owner=true`;
  try {
    const response = await fetch(baseURL + endpoint);
    const json = await response.json();

    if (response.ok) {
      return json;
    } else {
      throw Error;
    }
  } catch (e) {
    //error handeling
    console.log(e);
    toast.error(e);
  }
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
    const response = await fetch(baseURL + endpoint, options);
    const json = await response.json();
    if (!response.ok) {
      toast.error(`api error: ${json.errors[0].message}`);
    } else {
      toast.success("Venues has been created");
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    }
  } catch (e) {
    //error handeling
    console.log(e);
    toast.error(e);
  }
}

export async function deleteVenue(venueId, token, dispatch) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const endpoint = `/venues/${venueId}`;
  try {
    const response = await fetch(baseURL + endpoint, options);
    if (!response.ok) {
      console.log("NOT NICE");
      const errorJson = await response.json();
      console.log(errorJson);
    } else {
      toast.success("Venue deleted");
      dispatch(deleteMyVenue(venueId));
    }
  } catch (error) {
    toast.error(error);
    console.log("Error occurred:", error);
  }
}
