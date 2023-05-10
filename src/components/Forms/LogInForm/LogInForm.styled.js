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
  .btn_login {
    margin-top: 10px;
  }
`;

export { FormLogIn };
