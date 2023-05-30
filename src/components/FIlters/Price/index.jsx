import React, { useState, useEffect } from "react";
import { Stack, Slider, TextField } from "@mui/material";
import { FilterMarginContainer } from "../Filters.styled";
import { useSelector, useDispatch } from "react-redux";
import { addMaxPrice, addMinPrice } from "../../../features/venueSlice";
import { UserInput } from "../../../styles/Inputs.styled";
import { GroupedInputs } from "../../Forms/VenueForm/VenueForm.styled";
export default function App() {
  //redux
  const dispatch = useDispatch();
  const minNum = useSelector((state) => state.venues.filter.minPrice);
  const maxNum = useSelector((state) => state.venues.filter.maxPrice);
  const minmin = 1;
  const maxmax = 3000;

  const [priceRangeValue, setPriceRangeValue] = useState([1, 3000]);

  const handlePriceRangeChange = (event, newValue) => {
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
      <GroupedInputs>
        <div className="group-left">
          <label htmlFor="max">Min price</label>
          <UserInput readOnly value={minNum} />
        </div>
        <div className="group-right">
          <label htmlFor="max">Max price</label>
          <UserInput readOnly value={maxNum} />
        </div>
      </GroupedInputs>
    </FilterMarginContainer>
  );
}
