import styled from "styled-components";

const LoadingContainer = styled.div`
  flex: 1;
  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-height: 350px;
  grid-gap: 15px;
`;
const Card = styled.div`
  border: 1px solid var(--border);
  border-color: var(--border-color);
  background-color: var(--background-color);
  border-radius: var(--main-border-radius);
  backdrop-filter: var(--backdrop-filter);
  .skeleton-loading-image {
    margin: 15px;
    margin-bottom: 0;
    height: 180px;
    display: flex;
  }
  .skeleton-loading-heading {
    margin: 0 15px;
    height: 30px;
    display: flex;
  }
  .skeleton-loading-text {
    margin: 0 15px;
    height: 20px;
    display: flex;
  }
`;
export { LoadingContainer, Card };
