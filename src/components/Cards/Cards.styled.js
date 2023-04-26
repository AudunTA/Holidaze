import styled from "styled-components";
const Card = styled.div`
  border-radius: var(--main-border-radius);
  border: 1px solid var(--border);
  border-color: var(--border-color);
  background-color: var(--background-color);
  backdrop-filter: var(--backdrop-filter);

  display: flex;
  flex-direction: row;
  cursor: pointer;
  .card-left {
    flex: 1;
    margin: 15px;
    margin-right: 0;
  }
  .card-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px;
  }
  :hover {
    transition: 0.3s;
    border: 1px solid var(--border);
    backdrop-filter: var(--backdrop-filter);
  }
`;

const CardContainer = styled.div`
  flex: 1;

  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 15px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export { Card, CardContainer };
