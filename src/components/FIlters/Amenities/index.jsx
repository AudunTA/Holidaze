import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";
import { AmenitiesContainer } from "./Amenities.styled";
import {
  useQueryParam,
  NumberParam,
  withDefault,
  ArrayParam,
} from "use-query-params";

function Amenities({ filterStatus }) {
  const [checkWifi, setCheckWifi] = useState(false);
  const [checkParking, setCheckParking] = useState(false);
  const [checkBreakfast, setCheckBreakfast] = useState(false);
  const [checkPets, setCheckPets] = useState(false);

  const myFiltersParam = withDefault(ArrayParam, []);
  const [filters, setFilters] = useQueryParam("filters", myFiltersParam);

  useEffect(() => {
    // Add the checked filters to the URL parameter
    const newFilters = [];
    if (checkWifi) {
      newFilters.push("wifi");
    }
    if (checkParking) {
      newFilters.push("parking");
    }
    if (checkBreakfast) {
      newFilters.push("breakfast");
    }
    if (checkPets) {
      newFilters.push("pets");
    }
    setFilters(newFilters);
  }, [filterStatus]);

  return (
    <AmenitiesContainer>
      <button onClick={() => console.log(filters, filterStatus)}>test</button>
      <div className="group-content">
        <Checkbox
          className="check-box"
          onChange={() => setCheckWifi(!checkWifi)}
        ></Checkbox>
        <p>Wifi</p>
      </div>
      <div className="group-content">
        <Checkbox
          className="check-box"
          onChange={() => setCheckParking(!checkParking)}
        ></Checkbox>
        <p>Parkings</p>
      </div>
      <div className="group-content">
        <Checkbox
          className="check-box"
          onChange={() => setCheckBreakfast(!checkBreakfast)}
        ></Checkbox>
        <p>Breakfast</p>
      </div>
      <div className="group-content">
        <Checkbox
          className="check-box"
          onChange={() => setCheckPets(!checkPets)}
        ></Checkbox>
        <p>Pets</p>
      </div>
    </AmenitiesContainer>
  );
}

export default Amenities;
