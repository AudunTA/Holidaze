import styled from "styled-components";

const PrimaryButton = styled.div`
  background-color: var(--btn-color-primary);
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

const ClearButton = styled.div`
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
`;

export { PrimaryButton, ClearButton };
