import React from "react";
import { FilterContainer, Filter } from "./Filters.styled";
import { ReactComponent as PlusIcon } from "../../assets/images/plusIcon.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/minusIcon.svg";
import SmoothCollapse from "react-smooth-collapse";
import { useState } from "react";
import Price from "./Price";
import Guests from "./Guests";
import Amenities from "./Amenities";
import { PrimaryButton } from "../../styles/Buttons.styled";
function Filters() {
  //Expand states
  const [expandPrice, setExpandPrice] = useState(false);
  const [expandGuests, setExpandGuests] = useState(false);
  const [expandAmenities, setExpandAmenities] = useState(false);
  const [expandDate, setExpandDate] = useState(false);

  //expand functions
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
  //filters set in an array so i only have to map it and not rewrite the code multiple times.
  const filters = [
    {
      heading: "Price",
      action: handleExpandPrice,
      show: expandPrice,
      component: <Price />,
    },
    {
      heading: "Dates",
      action: handleExpandDate,
      show: expandDate,
      component: <Guests />,
    },
    {
      heading: "Amenities",
      action: handleExpandAmenities,
      show: expandAmenities,
      component: <Amenities />,
    },
    {
      heading: "Guests",
      action: handleExpandGuests,
      show: expandGuests,
      component: <Guests />,
    },
  ];
  return (
    <FilterContainer>
      {filters.map((ele) => {
        console.log("INNE");
        return (
          <Filter active={ele.show} key={ele.heading}>
            <div className="filter-top">
              <p>{ele.heading}</p>
              {ele.show ? (
                <MinusIcon className="icon-filter" onClick={ele.action} />
              ) : (
                <PlusIcon className="icon-filter" onClick={ele.action} />
              )}
            </div>
            <SmoothCollapse expanded={ele.show} className="content-filter">
              {ele.component}
            </SmoothCollapse>
          </Filter>
        );
      })}
      <PrimaryButton className="btn-filter">
        <p>Apply Filters</p>
      </PrimaryButton>
    </FilterContainer>
  );
}

export default Filters;
