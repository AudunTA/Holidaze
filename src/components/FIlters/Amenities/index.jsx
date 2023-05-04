import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { AmenitiesContainer } from "./Amenities.styled";
import {
  useQueryParam,
  NumberParam,
  withDefault,
  ObjectParam,
} from "use-query-params";
import { useDispatch, useSelector } from "react-redux";

//import redux toolkit reducers
import {
  addFilterWifi,
  addFilterParking,
  addFilterBreakfast,
  addFilterPets,
} from "../../../features/filterSlice";
function Amenities() {
  const dispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);

  // const myFiltersParam = withDefault(ObjectParam, {});
  //  const [filters, setFilters] = useQueryParam("filters", myFiltersParam);
  const handleLogTest = () => {
    console.log(filterState);
  };

  return (
    <>
      <button onClick={handleLogTest}>LOG FILTERS</button>
      <AmenitiesContainer>
        <div className="group-content">
          <Checkbox
            className="check-box"
            checked={filterState.wifi}
            onChange={() => dispatch(addFilterWifi(!filterState.wifi))}
          ></Checkbox>
          <p>Wifi</p>
        </div>
        <div className="group-content">
          <Checkbox
            className="check-box"
            checked={filterState.parking}
            onChange={() => dispatch(addFilterParking(!filterState.parking))}
          ></Checkbox>
          <p>Parkings</p>
        </div>
        <div className="group-content">
          <Checkbox
            className="check-box"
            checked={filterState.breakfast}
            onChange={() =>
              dispatch(addFilterBreakfast(!filterState.breakfast))
            }
          ></Checkbox>
          <p>Breakfast</p>
        </div>
        <div className="group-content">
          <Checkbox
            className="check-box"
            checked={filterState.pets}
            onChange={() => dispatch(addFilterPets(!filterState.pets))}
          ></Checkbox>
          <p>Pets</p>
        </div>
      </AmenitiesContainer>
    </>
  );
}

export default Amenities;
