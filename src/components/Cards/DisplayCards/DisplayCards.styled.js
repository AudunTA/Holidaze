import { Card } from "../Cards.styled";
import styled from "styled-components";
const DisplayCard = styled(Card)`
  height: 100%;
  .card-image {
    max-height: 180px;
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
    display: flex;
    color: var(--text-color-main);
    font-family: NeuweltRegular;
    font-size: 20px;
    font-weight: 400;
  }
  .card-text {
    margin: 5px 15px;
    display: flex;
    font-size: 16px;
    color: var(--text-color-light);
  }
  .btn-seeMore {
    margin-right: 15px;
    margin-left: 15px;
    margin-bottom: 3px;
  }
  .icon-star {
    color: #f3b200;
    font-size: 15px;
  }
  .info-top {
    display: flex;
    justify-content: space-between;
    .star-rating {
      display: flex;
      align-items: center;
    }
  }
`;
export { DisplayCard };
