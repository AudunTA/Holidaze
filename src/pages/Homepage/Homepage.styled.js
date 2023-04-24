import styled from "styled-components";

const MainContainer = styled.div`
  margin: auto;
  max-width: var(--max-width);
  display: flex;
`;
const TestDiv = styled.div`
  margin: auto;
  width: 300px;
  height: 300px;
  border: 1px solid #e2e8f0;
  border-color: hsla(0, 0%, 100%, 0.1);
  background-color: hsla(0, 0%, 100%, 0.05);
  border-radius: 1rem;
  backdrop-filter: blur(24px);
`;

export { MainContainer, TestDiv };
