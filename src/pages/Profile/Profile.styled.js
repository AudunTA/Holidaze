import styled from "styled-components";

const ProfileContainer = styled.div`
  margin: 15px auto;
  max-width: 600px;
  border-radius: var(--main-border-radius);
  border: 1px solid var(--border);
  border-color: var(--border-color);
  background-color: var(--background-color);
  backdrop-filter: var(--backdrop-filter);
  .top-section-profile {
    display: flex;
    justify-content: space-between;
    .wrapper-profile-info {
      display: flex;
    }
  }
  .margin-left {
    margin-left: 15px;
  }
`;
const MarginWrapper = styled.div`
  margin: 15px;
`;
const AvatarImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

const ButtonSettings = styled.div`
  cursor: pointer;
  padding: 15px;
  border: none;
  background-color: ${(props) =>
    props.active ? "var(--text-color-highlight)" : ""};
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  transition: 0.15s;
  .arrow-icon {
    color: var(--text-color-light);
  }
  :hover {
    background-color: var(--text-color-highlight);
  }
`;
export { ProfileContainer, MarginWrapper, AvatarImage, ButtonSettings };
