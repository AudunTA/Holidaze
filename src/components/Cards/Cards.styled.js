import styled from "styled-components";
const Card = styled.div`
  cursor: pointer;
  .card-left {
    height: 100%;
    max-height: 182px;
  }
  .card-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media only screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export { Card, CardContainer };
