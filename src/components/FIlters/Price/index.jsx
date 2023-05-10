import React, { useState, useEffect } from "react";
import { Stack, Typography, Slider, TextField } from "@mui/material";
import { FilterMarginContainer } from "../Filters.styled";
import { useSelector, useDispatch } from "react-redux";
import { addMaxPrice, addMinPrice } from "../../../features/venueSlice";
export default function App() {
  //redux
  const dispatch = useDispatch();
  const minNum = useSelector((state) => state.venues.filter.minPrice);
  const maxNum = useSelector((state) => state.venues.filter.maxPrice);
  const minmin = 300;
  const maxmax = 3000;
  console.log(minNum, maxNum);
  const [priceRangeValue, setPriceRangeValue] = useState([0, 4000]);
  console.log(priceRangeValue);
  const handlePriceRangeChange = (event, newValue) => {
    console.log("TEST: ", newValue);
    dispatch(addMinPrice(newValue[0]));
    dispatch(addMaxPrice(newValue[1]));
    setPriceRangeValue(newValue);
  };

  return (
    <FilterMarginContainer>
      <Slider
        getAriaLabel={() => "Price range"}
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        min={minmin}
        max={maxmax}
      />
      <Stack direction="row" justifyContent="space-evenly" alignItems="center">
        <TextField
          label="min"
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={minNum}
        />
        <Typography>-</Typography>
        <TextField
          label="max"
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={maxNum}
        />
      </Stack>
    </FilterMarginContainer>
  );
}
