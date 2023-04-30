import styled from "styled-components";

const SignUpContainer = styled.div`
  margin: 100px auto;
  max-width: 400px;
  border: 1px solid var(--border);
  border-color: var(--border-color);
  background-color: var(--background-color);
  backdrop-filter: var(--backdrop-filter);
  border-radius: var(--main-border-radius);
  position: relative;
  --pixel-border: 1px;
  .illustration-horizontal {
    position: absolute;
    background: linear-gradient(
      to right,
      #262d3e 0%,
      var(--border-color) 25%,
      var(--border-color) 75%,
      #262d3e 100%
    );
  }
  .illustration-vertical {
    position: absolute;
    background: linear-gradient(
      to bottom,
      #262d3e 0%,
      var(--border-color) 25%,
      var(--border-color) 75%,
      #262d3e 100%
    );
  }
  .layer-one {
    left: -200px;
    top: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 800px;
  }
  .layer-two {
    left: -200px;
    bottom: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 800px;
  }
  .layer-three {
    left: -1px;
    bottom: -200px;
    right: 0;
    height: 800px;
    width: var(--pixel-border);
  }
  .layer-four {
    bottom: -200px;
    right: -1px;
    height: 800px;
    width: var(--pixel-border);
  }
  .layer-five {
    bottom: -100px;
    right: -15px;
    height: 600px;
    width: var(--pixel-border);
  }
  .layer-six {
    left: -15px;
    bottom: -100px;
    right: 0;
    height: 600px;
    width: var(--pixel-border);
  }
  .layer-seven {
    left: -100vw;
    top: -15px;
    right: 0;
    height: var(--pixel-border);
    width: 200vw;
  }
  .layer-eight {
    left: -100vw;
    bottom: -15px;
    right: 0;
    height: var(--pixel-border);
    width: 200vw;
  }
  .logo-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .options-container {
    display: flex;
    padding: 5px;
    justify-content: space-evenly;
    border-radius: var(--main-border-radius);
    background-color: var(--text-color-highlight);

    .btn-LogIn {
      cursor: pointer;
      white-space: nowrap;
      color: var(--text-color-main);
      border-radius: var(--main-border-radius);
      width: 50%;
      text-align: center;
      background-color: ${(props) =>
        props.active ? "var(--btn-color-primary)" : "none"};
      p {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }

    .btn-SignUp {
      cursor: pointer;
      white-space: nowrap;
      color: var(--text-color-main);
      width: 50%;
      border-radius: var(--main-border-radius);
      text-align: center;
      background-color: ${(props) =>
        props.active ? "none" : "var(--btn-color-primary)"};
      p {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }
  }
`;
const BackGroundImg = styled.img`
  z-index: -1;
  position: absolute;
`;

export { SignUpContainer, BackGroundImg };
