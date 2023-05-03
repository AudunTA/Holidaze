import styled from "styled-components";

const SearchBarContainer = styled.div`
  position: sticky;
  top: 0px;
  z-index: 2;
  height: 30px;
  width: 100%;
  border: 1px solid var(--border);
  border-color: var(--border-color);
  background-color: var(--background-color);
  backdrop-filter: var(--backdrop-filter);

  .max-width {
    margin: auto;
    max-width: var(--max-width);
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 1250px) {
      margin: 0 15px;
    }
  }
  .color-border {
    position: absolute;
    top: 140px;
    width: 100vw;
  }
`;

export { SearchBarContainer };
