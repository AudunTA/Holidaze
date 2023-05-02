import React, { useEffect } from "react";
import { VenuesForm, GroupedInputs, FormLabel } from "./VenueForm.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import * as I from "../../../styles/Inputs.styled";
import { useState } from "react";
function VenueForm({ venueName, formType }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [guests, setGuests] = useState();
  const [image, setImage] = useState();
  const [rating, setRating] = useState();
  const [city, setCity] = useState();
  const [desc, setDesc] = useState("");
  useEffect(() => {
    setDescription(venueName);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "create") {
      console.log("NICE");
    }
  };
  return (
    <VenuesForm onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <I.UserInput placeholder="your venue name" />
      <FormLabel>Description</FormLabel>
      <I.UserTextArea
        placeholder="Venue Description"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <GroupedInputs>
        <div className="group group-left">
          <FormLabel>Price</FormLabel>
          <I.UserInput placeholder="Price per night" />
        </div>
        <div className="group group-right">
          <FormLabel>Guests</FormLabel>
          <I.UserInput placeholder="Max guests" />
        </div>
      </GroupedInputs>
      <FormLabel>Image</FormLabel>
      <I.UserInput placeholder="Image URL" />
      <GroupedInputs>
        <div className="group group-left">
          <FormLabel>rating</FormLabel>
          <I.UserInput placeholder="the venues rating" />
        </div>
        <div className="group group-right">
          <FormLabel>city</FormLabel>
          <I.UserInput placeholder="location" />
        </div>
      </GroupedInputs>
      <button type="submit">ADD VENUE</button>
    </VenuesForm>
  );
}

export default VenueForm;
