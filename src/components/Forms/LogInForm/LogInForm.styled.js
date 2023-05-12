import styled from "styled-components";

const FormLogIn = styled.form`
  .logIn-inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .error-message {
    font-size: 13px;
    color: var(--text-color-error);
    margin-block-start: 0em;
    margin-block-end: 1em;
  }
  .message-success {
    font-size: 13px;
    color: var(--text-color-sucess);
    margin-block-start: 0em;
    margin-block-end: 1em;
  }
  .error {
    font-size: 15px;
    color: var(--text-color-error);
    font-family: NeuweltLight;
    line-height: 25px;
  }
  .margin-error {
    display: flex;
    justify-content: center;
  }

  button {
    margin-top: 10px;
    cursor: pointer;
    background-color: var(--btn-color-primary);
    width: 100%;
    height: 32px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--secondary-border-radius);
    border: 1px solid var(--border-color);
    font-size: 15px;
    color: white;
    text-align: center;
    font-family: NeuweltLight;
  }
`;

export { FormLogIn };
