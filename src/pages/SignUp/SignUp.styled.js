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
    position: relative;
    display: flex;
    justify-content: space-between;
    border-top-right-radius: var(--main-border-radius);
    border-top-left-radius: var(--main-border-radius);
    background-color: var(--text-color-highlight);
    .triangle {
      position: absolute;
      width: 0;
      height: 0;
      top: -15px;
      right: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid black;
    }

    .btn-LogIn {
      cursor: pointer;
      padding: 0 60px;
      white-space: nowrap;
      color: var(--text-color-main);
      border-bottom: ${(props) =>
        props.active ? "" : "1px solid var(--border-color)"};
      border-top-left-radius: var(--main-border-radius);
      border-right: ${(props) =>
        props.active ? "1px solid var(--border-color)" : ""};
      background-color: ${(props) => (props.active ? "#292929" : "none")};
      border-top-right-radius: ${(props) => (props.active ? "7px" : "0px")};
      p {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }

    .btn-SignUp {
      cursor: pointer;
      padding: 0 60px;
      white-space: nowrap;
      color: var(--text-color-main);
      border-bottom: ${(props) =>
        props.active ? "1px solid var(--border-color)" : ""};
      border-left: ${(props) =>
        props.active ? "none" : "1px solid var(--border-color)"};
      background-color: ${(props) => (props.active ? "none" : "#292929")};
      border-top-right-radius: var(--main-border-radius);
      border-top-left-radius: ${(props) => (props.active ? "0px" : "7px")};
      p {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
      }
    }
  }
`;

export { SignUpContainer };
