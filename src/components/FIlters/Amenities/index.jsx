import React from "react";
import { Checkbox } from "@mui/material";
import { AmenitiesContainer } from "./Amenities.styled";
function Amenities() {
  return (
    <AmenitiesContainer>
      <Checkbox className="check-box" style={{ color: "white" }}></Checkbox>
      <p>Parkings</p>
    </AmenitiesContainer>
  );
}

export default Amenities;
