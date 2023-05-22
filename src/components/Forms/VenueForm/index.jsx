import React, { useEffect } from "react";
import { VenuesForm, GroupedInputs } from "./VenueForm.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import * as I from "../../../styles/Inputs.styled";
import { validationCreateVenue } from "../FormValidation/validation";
import { useState } from "react";
import { createVenueApi } from "../../API/venue";
import { useAuthUser } from "react-auth-kit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroupRow, FromRowHalf } from "./VenueForm.styled";
import { FormRow } from "../SignUpForm/SignUpForm.styled";
import { UserInput, UserTextArea } from "../../../styles/Inputs.styled";
import { EditButton } from "../../../styles/Buttons.styled";
import { Checkbox } from "@mui/material";
function VenueForm() {
  //auth I need this to send token in body object
  const auth = useAuthUser();
  //state management for api error
  const [errorApi, setErrorApi] = useState("");
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  //initial form values
  const initialValues = {
    name: "",
    description: "",
    price: "",
    maxGuests: "",
    city: "",
    rating: "",
    media: "",
  };
  const submitForm = (values) => {
    const bodyObj = {
      name: values.name,
      description: values.description,
      media: [values.media],
      price: Number(values.price),
      maxGuests: Number(values.maxGuests),
      rating: Number(values.rating),
      meta: {
        wifi: wifi,
        parking: parking,
        breakfast: breakfast,
        pets: pets,
      },
      location: {
        address: "string",
        city: values.city,
        zip: "string",
        country: "string",
        continent: "string",
        lat: 0,
        lng: 0,
      },
    };
    createVenueApi("POST", auth().token, bodyObj);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationCreateVenue}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { values, handleChange, handleSubmit, errors, touched } =
            formik;
          return (
            <>
              <VenuesForm onSubmit={handleSubmit}>
                <FormRow>
                  {errorApi ? (
                    <span className="error margin-error">{errorApi}</span>
                  ) : (
                    ""
                  )}
                  <label htmlFor="name">Venue name</label>
                  <UserInput
                    placeholder="what should you venue be called?"
                    type="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && touched.name && (
                    <span className="error">{errors.name}</span>
                  )}
                </FormRow>
                <FormRow>
                  <label htmlFor="description">Venue Description</label>
                  <UserTextArea
                    placeholder="description giving the customer more info about your venue"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                  {errors.description && touched.description && (
                    <span className="error">{errors.description}</span>
                  )}
                </FormRow>
                <FormGroupRow>
                  <FromRowHalf className="first-half">
                    <label htmlFor="price">Price</label>
                    <UserInput
                      placeholder="price per night"
                      type="price"
                      name="price"
                      value={values.price}
                      onChange={handleChange}
                    />
                    {errors.price && touched.price && (
                      <span className="error">{errors.price}</span>
                    )}
                  </FromRowHalf>
                  <FromRowHalf className="second-half">
                    <label htmlFor="maxGuests">Max guests</label>
                    <UserInput
                      placeholder="maxGuests"
                      type="maxGuests"
                      name="maxGuests"
                      value={values.maxGuests}
                      onChange={handleChange}
                    />
                    {errors.maxGuests && touched.maxGuests && (
                      <span className="error">{errors.maxGuests}</span>
                    )}
                  </FromRowHalf>
                </FormGroupRow>
                <FormGroupRow>
                  <FromRowHalf className="first-half">
                    <label htmlFor="city">City</label>
                    <UserInput
                      placeholder="venue location"
                      type="city"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    />
                    {errors.city && touched.city && (
                      <span className="error">{errors.city}</span>
                    )}
                  </FromRowHalf>
                  <FromRowHalf className="second-half">
                    <label htmlFor="rating">Rating</label>
                    <UserInput
                      placeholder="venue rating"
                      type="rating"
                      name="rating"
                      value={values.rating}
                      onChange={handleChange}
                    />
                    {errors.rating && touched.rating && (
                      <span className="error">{errors.rating}</span>
                    )}
                  </FromRowHalf>
                </FormGroupRow>
                <FormRow>
                  <label htmlFor="image">Image</label>
                  <UserInput
                    placeholder="image url"
                    type="text"
                    name="media"
                    value={values.media}
                    onChange={handleChange}
                  />
                  {errors.media && touched.media && (
                    <span className="error">{errors.media}</span>
                  )}
                </FormRow>
                <p className="amenities-label">Amenities</p>
                <div className="group-checkboxes">
                  <div className="checkbox-flex">
                    <Checkbox
                      className="check-box"
                      checked={wifi}
                      onChange={() => setWifi(!wifi)}
                    ></Checkbox>
                    <p>Wifi</p>
                  </div>

                  <div className="checkbox-flex">
                    <Checkbox
                      className="check-box"
                      checked={parking}
                      onChange={() => setParking(!parking)}
                    ></Checkbox>
                    <p>Parking</p>
                  </div>
                  <div className="checkbox-flex">
                    <Checkbox
                      className="check-box"
                      checked={breakfast}
                      onChange={() => setBreakfast(!breakfast)}
                    ></Checkbox>
                    <p>Breakfast</p>
                  </div>
                  <div className="checkbox-flex">
                    <Checkbox
                      className="check-box"
                      checked={pets}
                      onChange={() => setPets(!pets)}
                    ></Checkbox>
                    <p>Pets</p>
                  </div>
                </div>
                <EditButton type="submit">Sign In</EditButton>
              </VenuesForm>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default VenueForm;
