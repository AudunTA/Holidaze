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
const TestDiv = styled.div`
  margin: 15px auto;
  width: 300px;
  height: 300px;
  border: 1px solid #e2e8f0;
  border-color: hsla(0, 0%, 100%, 0.1);
  background-color: #f9f9f9;
  border-radius: 1rem;
  backdrop-filter: blur(24px);
`;

export { MainContainer, TestDiv };
