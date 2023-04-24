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

  .manager-account {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--border);
    border-color: var(--border-color);
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);

    p {
      color: var(--text-main-color);
      margin-block-start: 0em;
      margin-block-end: 0em;
      margin-left: 10px;
    }
    .manager-switch {
      margin-right: 10px;
    }
  }
  .error-message {
    font-size: 13px;
    color: var(--text-color-error);
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .success-message {
    font-size: 15px;
    font-family: NeuweltRegular;
    color: var(--text-color-sucess);
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`;

const FormInput = styled.input`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid var(--text-color-light);
`;
export { FormSignUp, FormInput };
