import React from "react";
import { useState } from "react";
import { FormLogIn } from "./LogInForm.styled";
import { UserInput } from "../../../styles/Inputs.styled";
import { useLogInUser } from "../../API/auth/login";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationLogIn } from "../FormValidation/validation";
import { FormRow } from "../SignUpForm/SignUpForm.styled";
import { ToastContainer } from "react-toastify";
import * as S from "../../../styles/Text.styled";
import "react-toastify/dist/ReactToastify.css";
function LogInForm() {
  const logInUser = useLogInUser();
  //state management for api error
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    email: "",
    password: "",
  };
  const submitForm = (values) => {
    logInUser(values.email, values.password, apiErrors);
  };
  //api error that is sent as a prop to the api method.
  const apiErrors = (error) => {
    setErrorApi(error);
  };
  //form
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationLogIn}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { values, handleChange, handleSubmit, errors, touched } =
            formik;
          return (
            <>
              <FormLogIn onSubmit={handleSubmit}>
                <FormRow>
                  {errorApi ? (
                    <span className="error margin-error">{errorApi}</span>
                  ) : (
                    ""
                  )}
                  <UserInput
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && touched.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </FormRow>

                <FormRow>
                  <UserInput
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </FormRow>

                <button type="submit">Sign In</button>
              </FormLogIn>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default LogInForm;
