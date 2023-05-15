import styled from "styled-components";

const AmenitiesContainer = styled.div`
  .small-info-text {
    font-size: 12px;
  }
  .group-content {
    display: flex;
    align-items: center;
    p {
      margin-block-start: 0em;
      margin-block-end: 0em;
      font-family: NeuweltLight;
      color: var(--text-color-light);
    }
    .check-box {
      color: var(--text-color-main);
    }
  }
`;

export { AmenitiesContainer };
