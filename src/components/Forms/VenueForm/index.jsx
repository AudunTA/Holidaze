import React, { useEffect } from "react";
import { VenuesForm, GroupedInputs, FormLabel } from "./VenueForm.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import * as I from "../../../styles/Inputs.styled";
import { validationCreateVenue } from "../FormValidation/validation";
import { useState } from "react";
import { createVenueApi } from "../../API/venue";
import { useAuthUser } from "react-auth-kit";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormRow } from "../SignUpForm/SignUpForm.styled";
import { UserInput, UserTextArea } from "../../../styles/Inputs.styled";
function VenueForm() {
  //auth I need this to send token in body object
  const auth = useAuthUser();
  //state management for api error
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    name: "",
    description: "",
    price: "",
    maxGuests: "",
  };
  const submitForm = (values) => {
    const bodyObj = {
      name: values.name,
      description: values.description,
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
                  <UserInput
                    placeholder="name"
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
                  <UserTextArea
                    placeholder="description"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                  {errors.description && touched.description && (
                    <span className="error">{errors.description}</span>
                  )}
                </FormRow>
                <FormRow>
                  <UserInput
                    placeholder="price"
                    type="price"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                  {errors.price && touched.price && (
                    <span className="error">{errors.price}</span>
                  )}
                </FormRow>
                <FormRow>
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
                </FormRow>
                <button type="submit">Sign In</button>
              </VenuesForm>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default VenueForm;
