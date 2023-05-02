import React, { useEffect } from "react";
import { VenuesForm, GroupedInputs, FormLabel } from "./VenueForm.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import * as I from "../../../styles/Inputs.styled";
import { useState } from "react";
import { createVenueApi } from "../../API/venue";
import { useAuthUser } from "react-auth-kit";
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
  const auth = useAuthUser();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "create") {
      const bodyObj = {
        name: name,
        description: description,
        media: [image],
        price: Number(price),
        maxGuests: Number(guests),
        rating: Number(rating),
        meta: {
          wifi: true,
          parking: true,
          breakfast: true,
          pets: true,
        },
        location: {
          address: "string",
          city: city,
          zip: "string",
          country: "string",
          continent: "string",
          lat: 0,
          lng: 0,
        },
      };
      createVenueApi("POST", auth().token, bodyObj);
    }
  };
  return (
    <VenuesForm onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <I.UserInput
        placeholder="your venue name"
        value={name}
        onChange={() => setName(event.target.value)}
      />
      <FormLabel>Description</FormLabel>
      <I.UserTextArea
        placeholder="Venue Description"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <GroupedInputs>
        <div className="group group-left">
          <FormLabel>Price</FormLabel>
          <I.UserInput
            type="number"
            placeholder="Price per night"
            value={price}
            onChange={() => setPrice(event.target.value)}
          />
        </div>
        <div className="group group-right">
          <FormLabel>Guests</FormLabel>
          <I.UserInput
            type="number"
            placeholder="Max guests"
            value={guests}
            onChange={() => setGuests(event.target.value)}
          />
        </div>
      </GroupedInputs>
      <FormLabel>Image</FormLabel>
      <I.UserInput
        placeholder="Image URL"
        value={image}
        onChange={() => setImage(event.target.value)}
      />
      <GroupedInputs>
        <div className="group group-left">
          <FormLabel>Rating</FormLabel>
          <I.UserInput
            type="number"
            placeholder="the venues rating"
            value={rating}
            onChange={() => setRating(event.target.value)}
          />
        </div>
        <div className="group group-right">
          <FormLabel>city</FormLabel>
          <I.UserInput
            placeholder="location"
            value={city}
            onChange={() => setCity(event.target.value)}
          />
        </div>
      </GroupedInputs>
      <button type="submit">ADD VENUE</button>
    </VenuesForm>
  );
}

export default VenueForm;
