import styled from "styled-components";

const FilterContainer = styled.div`
  height: 100vh;
  width: 250px;
  border: 1px solid var(--border-color);
  border-radius: var(--main-border-radius);
`;
const Filter = styled.div`
  min-height: 40px;
  padding: 10px;
  background-color: ${(props) =>
    props.active ? "var(--text-color-highlight)" : ""};
  border-bottom: 1px solid var(--border-color);
  .filter-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .icon-filter {
    cursor: pointer;
    width: 20px;
    height: 20px;
    color: var(--btn-color-primary);
  }
  .content-filter {
    display: inline-block;
  }
  :hover {
    background-color: var(--text-color-highlight);
  }
`;

export { FilterContainer, Filter };
