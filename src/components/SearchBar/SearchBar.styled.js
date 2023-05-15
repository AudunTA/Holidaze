import styled from "styled-components";
const BackGroundSearch = styled.div`
  width: 100%;
  position: sticky;
  top: 0px;
  height: 56px;
  z-index: 2;
  background-color: white;
  border-bottom: 1px solid var(--border);
  border-top: 1px solid var(--border);
  display: flex;
  align-items: center;
  transition: 0.05s;
  :focus-within {
    outline: 2px solid var(--text-color-purple);
    font-size: 16px;
  }
`;
const SearchBarContainer = styled.div`
  height: 56px;
  width: 100%;
  max-width: 1200px;
  border-radius: var(--main-border-radius);
  margin: auto;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #search-icon {
    font-size: 20px;
    padding: 8px;
    color: var(--background-color);
    border-radius: 66.7%;
    background-color: var(--btn-color-secondary);
    cursor: pointer;
  }
`;
const SearchInput = styled.input`
  border-top-left-radius: var(--main-border-radius);
  border-bottom-left-radius: var(--main-border-radius);
  margin-right: 10px;
  outline: none;
  border: none;
  flex: 1;
  height: 54px;
  transition: 0.15s;
  box-shadow: var(--shadow);

  :focus {
    font-size: 15px;
  }
`;

export { SearchBarContainer, SearchInput, BackGroundSearch };
