import styled from "styled-components";

const SignUpContainer = styled.div`
  margin: 100px auto;
  max-width: 400px;
  border: 1px solid var(--border);
  background-color: var(--background-color);
  backdrop-filter: var(--backdrop-filter);
  border-radius: var(--main-border-radius);
  position: relative;
  --pixel-border: 1px;
  .illustration-horizontal {
    position: absolute;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 10%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .illustration-vertical {
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 10%,
      rgba(0, 0, 0, 0.1) 90%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .layer-one {
    left: -25%;
    top: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 150%;
  }
  .layer-two {
    left: -25%;
    bottom: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 150%;
  }
  .layer-three {
    left: -1px;
    bottom: -25%;
    right: 0;
    height: 150%;
    width: var(--pixel-border);
  }
  .layer-four {
    bottom: -25%;
    right: -1px;
    height: 150%;
    width: var(--pixel-border);
  }
  .layer-five {
    bottom: -25%;
    right: -15px;
    height: 150%;
    width: var(--pixel-border);
  }
  .layer-six {
    left: -15px;
    bottom: -25%;
    right: 0;
    height: 150%;
    width: var(--pixel-border);
  }
  .layer-seven {
    left: -25%;
    top: -15px;
    right: 0;
    height: var(--pixel-border);
    width: 150%;
  }
  .layer-eight {
    left: -25%;
    bottom: -15px;
    right: 0;
    height: var(--pixel-border);
    width: 150%;
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
