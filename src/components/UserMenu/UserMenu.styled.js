import styled from "styled-components";
const UserMenuModal = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  right: 0;
  top: 40px;
  border: 1px solid var(--border-color);
  background-color: white;
  border-radius: var(--main-border-radius);
`;
const NavOption = styled.div`
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;

  .nav-icon {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    color: var(--text-color-dark);
  }
  p {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    color: var(--text-color-dark);
    font-family: NeuweltLight;
    font-size: 14px;
  }
  :hover {
    background-color: var(--text-color-highlight);
  }
`;
export { UserMenuModal, NavOption };
