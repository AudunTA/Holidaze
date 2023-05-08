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
    left: -50px;
    top: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 300px;
  }
  .layer-two {
    left: -50px;
    bottom: -1px;
    right: 0;
    height: var(--pixel-border);
    width: 300px;
  }
  .layer-three {
    left: -1px;
    bottom: -50px;
    right: 0;
    height: 300px;
    width: var(--pixel-border);
  }
  .layer-four {
    bottom: -50px;
    right: -1px;
    height: 300px;
    width: var(--pixel-border);
  }
  .layer-five {
    bottom: -50px;
    right: -15px;
    height: 300px;
    width: var(--pixel-border);
  }
  .layer-six {
    left: -15px;
    bottom: -50px;
    right: 0;
    height: 300px;
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
