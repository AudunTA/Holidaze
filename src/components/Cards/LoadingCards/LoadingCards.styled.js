import styled from "styled-components";
import { Card } from "../Cards.styled";

const LoadingCard = styled(Card)`
  .skeleton-loading-image {
    margin: 15px;
    margin-bottom: 0;
    height: 180px;
    display: flex;
  }
  .skeleton-loading-heading {
    margin: 10px 15px;
    margin-bottom: 0;
    height: 30px;
    display: flex;
  }
  .skeleton-loading-text {
    margin: 0 15px;
    height: 20px;
    display: flex;
  }
`;
export { LoadingCard };
