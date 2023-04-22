import styled from "styled-components";

const FilterContainer = styled.div`
  height: 100vh;
  width: 250px;
  border: 1px solid var(--border-color);
  border-radius: var(--main-border-radius);
`;
const Filter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid var(--border-color);
  .plus-icon {
    width: 20px;
    height: 20px;
    color: var(--btn-color-primary);
  }
`;

export { FilterContainer, Filter };
