import styled from "styled-components";

const IllustrationContainer = styled.div`
  width: 200px;
  height: 200px;
  margin-right: 150px;
  background-color: var(--text-color-highlight);
  border: 1px solid var(--border);
  position: relative;
  --pixel-border: 1px;
  .illustration-horizontal {
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 17.97%,
      rgba(255, 255, 255, 0.1) 17.98%,
      rgba(0, 0, 0, 0.1) 64.54%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .illustration-vertical {
    position: absolute;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.1) 24.67%,
      rgba(0, 0, 0, 0.1) 70.22%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .layer-one {
    left: -100px;
    top: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 400px;
  }
  .layer-two {
    left: -100px;
    bottom: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 400px;
  }
  .layer-three {
    left: -0px;
    bottom: -100px;
    right: 0;
    height: 400px;
    width: var(--pixel-border);
  }
  .layer-four {
    bottom: -100px;
    right: -1px;
    height: 400px;
    width: var(--pixel-border);
  }
  .layer-five {
    bottom: -100px;
    right: -15px;
    height: 400px;
    width: var(--pixel-border);
  }
  .layer-six {
    left: -15px;
    bottom: -100px;
    right: 0;
    height: 400px;
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
  .logo {
    object-fit: cover;
  }
`;

export { IllustrationContainer };
