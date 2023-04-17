import styled from "styled-components";

const PrimaryButton = styled.div`
  background-color: #4896ff;
  height: 32px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
  border-radius: var(--secondary-border-radius);
  font-size: 15px;
  color: white;
  cursor: pointer;
  .arrow-down {
    width: 15px;
    height: 15px;
    margin-left: 5px;
  }
`;

export { PrimaryButton };
