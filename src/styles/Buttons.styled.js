import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? "var(--border)" : "var(--btn-color-secondary)"};
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
  cursor: pointer;
  P {
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-family: NeuweltLight;
  }
`;

const ButtonInverted = styled.div`
  background-color: white;
  height: 32px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--secondary-border-radius);
  border: 1px solid var(--btn-color-secondary);
  color: var(--btn-color-secondary);
  text-align: center;
  cursor: pointer;
  transition: 0.15s;
  P {
    font-size: 15px;
    line-height: 15px;
    margin-block-start: 0em;
    margin-block-end: 0em;
    font-family: NeuweltRegular;
  }
  .icon-clear {
    color: var(--text-color-error);
    font-size: 18px;
  }
  :hover {
    background-color: var(--btn-color-secondary);
    p {
      color: white;
    }
  }
`;
const EditButton = styled.button`
  background-color: var(--btn-color-primary);
  height: 32px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: var(--secondary-border-radius);
  border: 1px solid var(--border-color);
  font-size: 15px;
  color: white;
  text-align: center;
  font-family: NeuweltLight;
  cursor: pointer;
`;
const RemoveButton = styled.button`
  background-color: var(--text-color-error);
  height: 32px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: var(--secondary-border-radius);
  border: 1px solid var(--border-color);
  font-size: 15px;
  color: white;
  text-align: center;
  font-family: NeuweltLight;
  cursor: pointer;
`;

const PurpleButton = styled.button`
  background-color: var(--text-color-purple);
  padding: 10px 15px;
  border-radius: var(--secondary-border-radius);
  border: none;
  font-size: 17px;
  color: white;
  text-align: center;
  font-family: NeuweltLight;
  cursor: pointer;
`;
export {
  PrimaryButton,
  ButtonInverted,
  EditButton,
  RemoveButton,
  PurpleButton,
};
