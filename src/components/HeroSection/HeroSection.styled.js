import styled from "styled-components";

const HeroContainer = styled.div`
  height: 390px;

  .hero-description {
    max-width: var(--max-width);
    margin: 75px auto;
    p {
      color: var(--text-color-light);
      font-family: NeuweltLight;
    }
    h1 {
      color: var(--text-color-main);
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
