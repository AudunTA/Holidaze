import styled from "styled-components";

const UserInput = styled.input`
  box-sizing: border-box;
  margin-top: 10px;
  height: 34px;
  width: 100%;
  outline: none;
  border: 1px solid var(--border);
  background-color: white;
  border-radius: var(--main-border-radius);
  transition: 0.05s;
  padding-left: 15px;
  :focus {
    border: 2px solid var(--btn-color-primary);
  }

  ::select {
  }
`;
const UserTextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  font-family: NeuweltLight;
  margin-top: 10px;
  height: 68px;
  width: 100%;
  outline: none;
  border: 1px solid var(--border);
  color: var(--main-text-color);
  background-color: white;
  border-radius: var(--main-border-radius);
  transition: 0.05s;
  padding-left: 15px;
  padding-top: 5px;
  :focus {
    border: 2px solid var(--btn-color-primary);
  }

  ::select {
    color: white;
  }
`;
export { UserInput, UserTextArea };
