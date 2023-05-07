import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  max-width: var(--max-width);
  padding-top: 10px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  .logo-a {
    margin-left: 3px;
    width: 14px;
    height: 14px;
  }
  .ze {
    margin-bottom: 1px;
    margin-left: 3px;
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
