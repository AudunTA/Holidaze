import styled from "styled-components";
const UserMenuModal = styled.div`
  position: absolute;
  z-index: 1;
  width: 150px;
  right: 0;
  top: 50px;
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  border-radius: var(--main-border-radius);
`;
const NavOption = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    color: var(--text-color-main);
  }

  :hover {
    background-color: var(--text-color-highlight);
  }
`;
const NavLink = styled.a`
  text-decoration: none;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
  color: var(--text-color-main);
  font-family: NeuweltLight;
  font-size: 14px;
`;
export { UserMenuModal, NavOption, NavLink };
