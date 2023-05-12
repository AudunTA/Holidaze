import React from "react";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { registerUser } from "../../API/auth/register";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as S from "../../../styles/Text.styled";
import { validationSignUp } from "../FormValidation/validation";
import { FormSignUp } from "./SignUpForm.styled";
import { UserInput } from "../../../styles/Inputs.styled";
import { FormRow } from "./SignUpForm.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SingUpForm() {
  //state management for manager check and api error
  const [checkedManager, setCheckedManager] = useState(false);
  const [errorApi, setErrorApi] = useState("");
  //initial form values
  const initialValues = {
    email: "",
    name: "",
    password: "",
    avatar: "",
  };
  const submitForm = (values) => {
    registerUser(
      values.email,
      values.name,
      values.password,
      values.avatar,
      checkedManager,
      apiErrors
    );
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
        validationSchema={validationSignUp}
        onSubmit={submitForm}
      >
        {(formik) => {
          const { values, handleChange, handleSubmit, errors, touched } =
            formik;
          return (
            <>
              <FormSignUp onSubmit={handleSubmit}>
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
                    placeholder="Name"
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
                <FormRow>
                  <UserInput
                    placeholder="Avatar (optional)"
                    type="avatar"
                    name="avatar"
                    value={values.avatar}
                    onChange={handleChange}
                  />
                  {errors.avatar && touched.avatar && (
                    <span className="error">{errors.avatar}</span>
                  )}
                </FormRow>

                <div className="manager-account">
                  <S.SubHeading className="manager-margin">
                    Manager Account
                  </S.SubHeading>
                  <ReactSwitch
                    className="manager-switch"
                    onColor="#B1D1FD"
                    height={20}
                    width={40}
                    onHandleColor="#4896ff"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    checked={checkedManager}
                    onChange={() => setCheckedManager(!checkedManager)}
                  />
                </div>
                <button type="submit">Sign In</button>
              </FormSignUp>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default SingUpForm;
