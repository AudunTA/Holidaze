import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 56px;
  width: 100%;
  max-width: 500px;
  border-radius: 28px;
  margin: auto;
  border: 1px solid var(--border);
  backdrop-filter: var(--backdrop-filter);
  display: flex;
  align-items: center;
  .search-icon-container {
    justify-content: space-between !important;
  }
  #search-icon {
    font-size: 20px;
    padding: 8px;
    color: var(--background-color);
    border-radius: 66.7%;
    background-color: var(--btn-color-secondary);
  }
`;

export { SearchBarContainer };
