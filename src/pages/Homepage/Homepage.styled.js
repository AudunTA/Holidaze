import styled from "styled-components";

const MainContainer = styled.div`
  margin: 15px auto;
  max-width: var(--max-width);
  display: flex;
  @media only screen and (max-width: 1250px) {
    margin: 15px;
  }
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export { MainContainer };
