import styled from "styled-components";

const HeroContainer = styled.div`
  height: 390px;
  background-image: url("src/assets/images/herobanner.svg");
  .hero-description {
    max-width: var(--max-width);
    margin: 75px auto;
    p {
      color: var(--text-color-light);
    }
    h1 {
      color: var(--text-color-dark);
      font-size: 36px;
      line-height: 40px;
      margin-block-start: 0em;
      margin-block-end: 0em;
    }
    .top-hero {
      display: flex;
      p {
        margin-right: 10px;
      }
    }
  }
`;
export { HeroContainer };
