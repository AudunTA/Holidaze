import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import { useState } from "react";
//For redux state handling
import { useDispatch, useSelector } from "react-redux";
import { addFilterGuests } from "../../../features/venueSlice";
function Guests() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.venues.filter);

  const handleChange = (e) => {
    dispatch(addFilterGuests(e.target.value));
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="guests-label">Number of guests</InputLabel>
        <Select
          labelId="guests-label"
          value={filterState.guests}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>unselect</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5+</MenuItem>
        </Select>
      </FormControl>
      <button onClick={() => console.log(filterState.guests)}>LOG value</button>
    </>
  );
}

export default Guests;
