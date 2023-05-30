import React from "react";
import { MarginWrapper } from "../../styles/Layout.styled";
import { BrowseContainer, GroupContent } from "./BrowseVenues.styled";
import { Link } from "react-router-dom";
import { PurpleButton } from "../../styles/Buttons.styled";
function BrowseVenues() {
  return (
    <MarginWrapper>
      <Link to="/Explore">
        <BrowseContainer>
          <GroupContent>
            <PurpleButton>Explore, filter and more!</PurpleButton>
          </GroupContent>
        </BrowseContainer>
      </Link>
    </MarginWrapper>
  );
}

export default BrowseVenues;
