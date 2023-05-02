import styled from "styled-components";

const UserInput = styled.input`
  box-sizing: border-box;
  margin-top: 10px;
  height: 34px;
  width: 100%;
  outline: none;
  border: 2px solid var(--text-color-highlight);
  color: var(--main-text-color);
  background-color: var(--text-color-highlight);
  border-radius: var(--main-border-radius);
  transition: 0.15s;
  padding-left: 15px;
  :focus {
    border: 2px solid var(--btn-color-primary);
    color: white;
  }
  ::placeholder {
    color: white;
  }
  ::select {
    color: white;
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
  border: 2px solid var(--text-color-highlight);
  color: var(--main-text-color);
  background-color: var(--text-color-highlight);
  border-radius: var(--main-border-radius);
  transition: 0.15s;
  padding-left: 15px;
  padding-top: 5px;
  :focus {
    border: 2px solid var(--btn-color-primary);
    color: white;
  }
  ::placeholder {
    color: white;
  }
  ::select {
    color: white;
  }
`;
export { UserInput, UserTextArea };
