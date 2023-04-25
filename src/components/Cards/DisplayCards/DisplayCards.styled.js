import { Card } from "../Cards.styled";
import styled from "styled-components";
const DisplayCard = styled(Card)`
  .card-image {
    max-height: 180px;
    max-width: 190px;
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: var(--main-border-radius);
    border: 1px solid var(--border);
    border-color: var(--border-color);
    background-color: var(--background-color);
    backdrop-filter: var(--backdrop-filter);
  }
  .card-heading {
    margin: 0 15px;
    height: 30px;
    display: flex;
    color: var(--text-color-main);
    font-family: NeuweltLight;
    font-size: 18px;
    font-weight: 400;
  }
  .card-text {
    margin: 0 15px;
    height: 20px;
    display: flex;
  }
`;
export { DisplayCard };
