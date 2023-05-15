import React from "react";
import { SettingContainer } from "../Settings.styled";
import VenueForm from "../../Forms/VenueForm";
function CreateVenue({ showComponent }) {
  return (
    <SettingContainer>
      <VenueForm showComponent={showComponent} />
    </SettingContainer>
  );
}

export default CreateVenue;
