import styled from "styled-components";

const FormSignUp = styled.form`
  width: 100%;
  p {
    font-family: NeuweltLight;
    color: var(--text-color-light);
  }
  .signUp-inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  input {
    display: flex;
    flex: 1;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--text-color-light);
  }
`;

export { FormSignUp };
