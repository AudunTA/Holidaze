import React from "react";
import { SettingContainer } from "../Settings.styled";
import VenueForm from "../../Forms/VenueForm";
function CreateVenue() {
  return (
    <SettingContainer>
      <VenueForm venueName="per" formType="create" />
    </SettingContainer>
  );
}

export default CreateVenue;
