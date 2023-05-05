import React, { useState, useEffect } from "react";
import { Stack, Typography, Slider, TextField } from "@mui/material";
import { FilterMarginContainer } from "../Filters.styled";
export default function App() {
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(1000);
  const minmin = 100;
  const maxmax = 3000;
  const [priceRangeValue, setPriceRangeValue] = useState([0, 1000]);

  const handlePriceRangeChange = (event, newValue) => {
    setMinNum(newValue[0]);
    setMaxNum(newValue[1]);
    setPriceRangeValue(newValue);
  };

  console.log(priceRangeValue);

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
          onChange={(e) => {
            setMinNum(Number(e.target.value));
            setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
          }}
        />
        <Typography>-</Typography>
        <TextField
          label="max"
          type="number"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          sx={{ width: "90px" }}
          value={maxNum}
          onChange={(e) => {
            setMaxNum(Number(e.target.value));
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
        />
      </Stack>
    </FilterMarginContainer>
  );
}
