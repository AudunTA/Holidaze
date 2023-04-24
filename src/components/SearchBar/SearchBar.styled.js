import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 40px;
  width: 100%;
  border: 1px solid var(--border);
  border-color: var(--border-color);
  background-color: var(--background-color);
  backdrop-filter: var(--backdrop-filter);

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
  .color-border {
    position: absolute;
    top: 140px;
    width: 100vw;
  }
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  height: 30px;
  input {
    outline: none;
    height: 100%;
    border: none;
    flex: 1;
    color: var(--text-color-main);
    background-color: transparent;
    ::placeholder {
      color: var(--text-color-main);
    }
  }
`;
export { SearchBarContainer, SearchInput };
