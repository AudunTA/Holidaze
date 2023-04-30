import styled from "styled-components";

const HeroContainer = styled.div`
  height: 350px;
  .wrapper-hero {
    height: 100%;
    margin: auto;
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .hero-description {
    .top-hero {
      display: flex;
      p {
        margin-right: 10px;
      }
    }
    .bottom-hero {
      display: flex;
      align-items: center;
    }
    .icon-hero {
      margin-right: 16px;
      color: var(--text-color-light);
      cursor: pointer;
    }
  }
  @media only screen and (max-width: 1250px) {
    margin: 0 15px;
  }
`;

export { HeroContainer };
