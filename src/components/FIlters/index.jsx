import React from "react";
import { FilterContainer, Filter } from "./Filters.styled";
import { ReactComponent as PlusIcon } from "../../assets/images/plusIcon.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/minusIcon.svg";
import SmoothCollapse from "react-smooth-collapse";
import Slider from "@mui/material/Slider";
import { useState } from "react";
function Filters() {
  const [expandPrice, setExpandPrice] = useState(false);
  const [expandGuests, setExpandGuests] = useState(false);
  const [expandAmenities, setExpandAmenities] = useState(false);
  const [expandDate, setExpandDate] = useState(false);
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleExpandPrice = () => {
    setExpandPrice(!expandPrice);
  };
  const handleExpandGuests = () => {
    setExpandGuests(!expandGuests);
  };
  const handleExpandAmenities = () => {
    setExpandAmenities(!expandAmenities);
  };
  const handleExpandDate = () => {
    setExpandDate(!expandDate);
  };
  return (
    <FilterContainer>
      <Filter active={expandPrice}>
        <div className="filter-top">
          <p>Price</p>
          {expandPrice ? (
            <MinusIcon className="icon-filter" onClick={handleExpandPrice} />
          ) : (
            <PlusIcon className="icon-filter" onClick={handleExpandPrice} />
          )}
        </div>
        <SmoothCollapse expanded={expandPrice} className="content-filter">
          <Slider />
        </SmoothCollapse>
      </Filter>

      <Filter active={expandGuests}>
        <div className="filter-top">
          <p>Guests</p>
          {expandGuests ? (
            <MinusIcon className="icon-filter" onClick={handleExpandGuests} />
          ) : (
            <PlusIcon className="icon-filter" onClick={handleExpandGuests} />
          )}
        </div>
        <SmoothCollapse expanded={expandGuests} className="content-filter">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          accusamus aspernatur labore. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Molestiae accusamus aspernatur labore. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Molestiae accusamus
          aspernatur labore.
        </SmoothCollapse>
      </Filter>

      <Filter active={expandAmenities}>
        <div className="filter-top">
          <p>Amenities</p>
          {expandAmenities ? (
            <MinusIcon
              className="icon-filter"
              onClick={handleExpandAmenities}
            />
          ) : (
            <PlusIcon className="icon-filter" onClick={handleExpandAmenities} />
          )}
        </div>

        <SmoothCollapse expanded={expandAmenities} className="content-filter">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          accusamus aspernatur labore. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Molestiae accusamus aspernatur labore. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Molestiae accusamus
          aspernatur labore.
        </SmoothCollapse>
      </Filter>
      <Filter active={expandDate}>
        <div className="filter-top">
          <p>Dates</p>
          {expandDate ? (
            <MinusIcon className="icon-filter" onClick={handleExpandDate} />
          ) : (
            <PlusIcon className="icon-filter" onClick={handleExpandDate} />
          )}
        </div>

        <SmoothCollapse expanded={expandDate} className="content-filter">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          accusamus aspernatur labore. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Molestiae accusamus aspernatur labore. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Molestiae accusamus
          aspernatur labore.
        </SmoothCollapse>
      </Filter>
    </FilterContainer>
  );
}

export default Filters;
