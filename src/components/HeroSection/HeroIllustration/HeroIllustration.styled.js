import styled from "styled-components";

const IllustrationContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 150px;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  position: relative;
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
    left: -100px;
    top: -1px;
    right: 0;
    height: 1px;
    width: 400px;
  }
  .layer-two {
    left: -100px;
    bottom: -1px;
    right: 0;
    height: 1px;
    width: 400px;
  }
  .layer-three {
    left: -0px;
    bottom: -100px;
    right: 0;
    height: 400px;
    width: 1px;
  }
  .layer-four {
    bottom: -100px;
    right: -1px;
    height: 400px;
    width: 1px;
  }
  .layer-five {
    bottom: -100px;
    right: -15px;
    height: 600px;
    width: 1px;
  }
  .layer-six {
    left: -15px;
    bottom: -100px;
    right: 0;
    height: 600px;
    width: 1px;
  }
  .layer-seven {
    left: -100vw;
    top: -15px;
    right: 0;
    height: 1px;
    width: 200vw;
  }
  .layer-eight {
    left: -100vw;
    bottom: -15px;
    right: 0;
    height: 1px;
    width: 200vw;
  }
  .logo-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;

export { IllustrationContainer };
