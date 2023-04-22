import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  max-width: var(--max-width);
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  .logo-a {
    margin-left: 3px;
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
  .nav-margin {
    margin-right: 15px;
  }
  .avatar-img {
    width: 23px;
    height: 23px;
    border-radius: 67%;
    margin-right: 5px;
  }
`;
export { HeaderContainer, LogoContainer, NavContainer };
