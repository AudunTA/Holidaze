import styled from "styled-components";

const PrimaryButton = styled.div`
  background-color: rgb(30 41 59/1);
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
  font-family: NeuweltRegular;
  cursor: pointer;
  .arrow-down {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

export { PrimaryButton };
