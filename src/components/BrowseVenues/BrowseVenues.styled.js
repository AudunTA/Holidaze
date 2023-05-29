import styled from "styled-components";
import panoramaCityImage from "../../assets/images/panoramaCityImage.jpg";

const BrowseContainer = styled.div`
  max-width: var(--max-width);
  margin: auto;
  height: 220px;
  background-size: cover;
  background-image: url(${panoramaCityImage});
  border-radius: var(--main-border-radius);
  border: 1px solid var(--text-color-purple);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1050px) {
    background-position: 0 0px;
  }
`;
const GroupContent = styled.div`
  text-align: center;
  align-items: center;
`;

export { BrowseContainer, GroupContent };
