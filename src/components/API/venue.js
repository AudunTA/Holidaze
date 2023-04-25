import { baseURL } from "./baseURL";
import { useSelector, useDispatch } from "react-redux";
import { addVenues } from "../../features/venues/venueSlice";
async function venueApi() {
  const endpoint = "/venues?_owner=true&bookings=true";
  try {
    console.log(baseURL + endpoint);
    const dispatch = useDispatch();
    const response = await fetch(baseURL + endpoint);
    const json = await response.json();
    console.log(json);
    dispatch(addVenues(json));
  } catch (e) {
    console.log(e);
  }
}

export default venueApi;
