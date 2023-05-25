import styled from "styled-components";

const FilterContainer = styled.div`
  width: 250px;
  margin-bottom: 15px;
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
  .border-wrapper {
    border: 1px solid var(--border);
    border-radius: var(--main-border-radius);
    backdrop-filter: blur(24px);
  }
  .wrapper-button {
    margin: 15px;
  }
  .btn-filter {
    font-size: 13px;
    width: 100%;
  }
  .btn-clear {
    margin: 15px;
    font-size: 13px;
  }
  label {
    font-size: 13px;
    color: var(--text-color-main);
    font-family: NeuweltRegular;
    line-height: 15px;
  }
`;
const Filter = styled.div`
  padding: 15px;
  background-color: ${(props) =>
    props.active ? "var(--text-color-highlight)" : ""};
  border-bottom: 1px solid var(--border);
  color: var(--text-color-main);
  .filter-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .range-slider {
    input {
      width: 100%;
      height: 30px;
    }
  }
  .icon-filter {
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: var(--btn-color-primary);
  }
  .content-filter {
  }
  :hover {
    background-color: var(--text-color-highlight);
  }
`;
const FilterMarginContainer = styled.div`
  margin: 10px;
  .group-left {
    margin-right: 5px;
  }
  .group-right {
    margin-left: 5px;
  }
  .small-info-text {
    font-size: 12px;
  }
  .select-form {
    margin-top: 10px;
  }
`;

export { FilterContainer, Filter, FilterMarginContainer };
