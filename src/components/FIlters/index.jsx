import React from "react";
import { FilterContainer, Filter } from "./Filters.styled";
import { ReactComponent as PlusIcon } from "../../assets/images/plusIcon.svg";
import { ReactComponent as MinusIcon } from "../../assets/images/minusIcon.svg";
import SmoothCollapse from "react-smooth-collapse";
import { useState } from "react";
import Price from "./Price";
import Guests from "./Guests";
import Amenities from "./Amenities";
import { PrimaryButton, ButtonInverted } from "../../styles/Buttons.styled";
import * as S from "../../styles/Text.styled";
import { useDispatch, useSelector } from "react-redux";
import { applyFilter } from "../../features/venueSlice";
import { clearFilter } from "../../features/venueSlice";
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
  //redux
  const state = useSelector((state) => state.venues);
  const dispatch = useDispatch();

  //Handeling the clearing of filters.
  const handleClearFilters = () => {
    dispatch(clearFilter());
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
      <div className="border-wrapper">
        {filters.map((ele) => {
          console.log("INNE");
          return (
            <Filter active={ele.show} key={ele.heading}>
              <div className="filter-top">
                <S.TextWhite>{ele.heading}</S.TextWhite>
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
        <div className="wrapper-button">
          <PrimaryButton
            className="btn-filter"
            onClick={() => dispatch(applyFilter())}
          >
            Apply Filters
          </PrimaryButton>
        </div>

        {state.filteredVenues.length > 0 ? (
          <ButtonInverted className="btn-clear" onClick={handleClearFilters}>
            <p>Clear filters ({state.filteredVenues.length} results) </p>
          </ButtonInverted>
        ) : (
          ""
        )}
      </div>
    </FilterContainer>
  );
}

export default Filters;
