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
  }
  .light-text {
    color: var(--text-color-light);
    font-size: 13px;
  }
`;
const MarginWrapper = styled.div`
  margin: 15px;
  .img-profile-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
export { ProfileContainer, MarginWrapper };
