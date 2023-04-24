import styled from "styled-components";

const FilterContainer = styled.div`
  height: 100vh;
  width: 250px;
  border: 1px solid #e2e8f0;
  border-color: hsla(0, 0%, 100%, 0.1);
  background-color: hsla(0, 0%, 100%, 0.05);
  border-radius: 1rem;
  backdrop-filter: blur(24px);
`;
const Filter = styled.div`
  min-height: 40px;
  padding: 10px;
  background-color: ${(props) =>
    props.active ? "var(--text-color-highlight)" : ""};
  border-bottom: 1px solid var(--border-color);
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

export { FilterContainer, Filter };
