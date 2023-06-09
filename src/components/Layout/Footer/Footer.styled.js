import styled from "styled-components";
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100px;
  width: 100%;
  border-top: 2px solid var(--text-color-highlight);
  margin-top: 50px;
  @media (max-width: 700px) {
    display: none;
  }
  .group-text {
    display: flex;
    .spacing-left {
      margin-left: 5px;
    }
  }
  #git-Icon {
    margin-left: 10px;
    color: var(--text-color-main);
    cursor: pointer;
  }
`;

export { FooterContainer };
