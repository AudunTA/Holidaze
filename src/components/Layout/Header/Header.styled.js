import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  @media (max-width: 700px) {
    justify-content: center;
  }
  max-width: var(--max-width);
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 1250px) {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .logo-a {
    width: 22px;
    height: 22px;
    margin-right: 3px;
  }
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
  .nav-item {
    margin-right: 20px;
    color: var(--text-color-main);
    font-size: 13px;
    font-family: NeuweltLight;
    cursor: pointer;
  }
  .avatar-img {
    width: 23px;
    height: 23px;
    border-radius: 67%;
    margin-right: 5px;
  }
  .arrow-icon {
    font-size: 18px;
  }
`;

export { HeaderContainer, LogoContainer, NavContainer };
