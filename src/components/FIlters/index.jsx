import React from "react";
import { FilterContainer, Filter } from "./Filters.styled";
import { ReactComponent as PlusIcon } from "../../assets/images/plusIcon.svg";
function Filters() {
  return (
    <FilterContainer>
      <Filter>
        <p>Price</p>
        <PlusIcon className="plus-icon" />
      </Filter>
      <Filter>
        <p>Guests</p>
        <PlusIcon className="plus-icon" />
      </Filter>
      <Filter>
        <p>Amenities</p>
        <PlusIcon className="plus-icon" />
      </Filter>
      <Filter>
        <p>Dates</p>
        <PlusIcon className="plus-icon" />
      </Filter>
    </FilterContainer>
  );
}

export default Filters;
