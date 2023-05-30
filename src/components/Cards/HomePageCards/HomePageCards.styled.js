import styled from "styled-components";
import { Card } from "../Cards.styled";
const DisplayCardWrapper = styled.div`
  .btn_showMore {
    width: 80px;
    margin: 20px auto;
  }
  h3 {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
const DisplayCard = styled(Card)`
  height: 100%;
  .card-image {
    max-height: 180px;
    object-fit: cover;
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: var(--main-border-radius);
    border: 1px solid var(--border);

    background-color: var(--background-color);
    box-shadow: var(--shadow);
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

const CardContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 475px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export { DisplayCard, DisplayCardWrapper, CardContainer };
