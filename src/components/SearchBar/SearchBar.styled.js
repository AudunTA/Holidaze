import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: sticky;
  top: 10px;
  z-index: 2;
  height: 56px;
  width: 100%;
  max-width: 1200px;
  border-radius: 28px;
  margin: auto;
  background-color: white;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;

  #search-icon {
    margin-right: 10px;
    font-size: 20px;
    padding: 8px;
    color: var(--background-color);
    border-radius: 66.7%;
    background-color: var(--btn-color-secondary);
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  margin-right: 10px;
  outline: none;
  border: none;
  border-right: 1px solid var(--border);
  flex: 1;
  height: 54px;
  transition: 0.15s;
  padding-left: 15px;
  box-shadow: var(--shadow);

  :focus {
    outline: 2px solid var(--text-color-purple);
    color: white;
  }
`;

export { SearchBarContainer, SearchInput };
