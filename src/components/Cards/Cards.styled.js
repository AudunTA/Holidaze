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
`;

const CardContainer = styled.div`
  flex: 1;
  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 0px;
  }
  @media only screen and (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { Card, CardContainer };
