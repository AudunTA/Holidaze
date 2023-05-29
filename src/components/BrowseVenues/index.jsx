import React from "react";
import { MarginWrapper } from "../../styles/Layout.styled";
import { BrowseContainer, GroupContent } from "./BrowseVenues.styled";

import { PurpleButton } from "../../styles/Buttons.styled";
function BrowseVenues() {
  return (
    <MarginWrapper>
      <BrowseContainer>
        <GroupContent>
          <PurpleButton>Explore All Venues</PurpleButton>
        </GroupContent>
      </BrowseContainer>
    </MarginWrapper>
  );
}

export default BrowseVenues;
