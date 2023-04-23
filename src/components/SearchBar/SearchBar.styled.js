import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 72px;
  width: 100%;
  background-color: white;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);

  .max-width {
    margin: auto;
    max-width: var(--max-width);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .search-icon {
    width: 20px;
    height: 20px;
  }
  .filter-icon {
    width: 20px;
    height: 20px;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 50px;
  color: var(--text-color-light);
  input {
    outline: none;
    height: 100%;
    border: none;
    flex: 1;
    color: var(--text-color-light);
  }
`;
export { SearchBarContainer, SearchInput };
