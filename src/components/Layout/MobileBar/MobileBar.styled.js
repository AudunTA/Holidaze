import styled from "styled-components";

const MobileBarContainer = styled.div`
  position: fixed;
  height: 56px;
  background-color: white;
  width: 100%;
  bottom: 0;
  border-top: 1px solid var(--border);
  box-shadow: var(--shadow);
  display: flex;
  @media (min-width: 700px) {
    display: none;
  }
  .flex-icons {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon-mobile-nav {
    margin: auto;
    font-size: 30px;
    color: var(--text-color-light);
  }
  .avatar-mobile-nav {
    width: 30px;
    height: 30px;
    border-radius: 66.7%;
    border: 1px solid var(--border);
  }
`;
const WrapperNavOptions = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { MobileBarContainer, WrapperNavOptions };
