import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import { FilterMarginContainer } from "../Filters.styled";
//For redux state handling
import { useDispatch, useSelector } from "react-redux";
import { addFilterGuests } from "../../../features/venueSlice";
import * as S from "../../../styles/Text.styled";
function Guests() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.venues.filter);

  const handleChange = (e) => {
    console.log(e.target.value);
    dispatch(addFilterGuests(e.target.value));
  };
  return (
    <FilterMarginContainer>
      <S.TextGrey className="small-info-text">
        this filter will return only venues that has room for more guests than
        you select.
      </S.TextGrey>
      <FormControl fullWidth className="select-form">
        <InputLabel>Number of guests</InputLabel>
        <Select
          value={filterState.guests}
          onChange={handleChange}
          label="Number guests"
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
    </FilterMarginContainer>
  );
}

export default Guests;
