import styled from "styled-components";

const VenueLayOut = styled.div`
  display: flex;
`;
const ImageSection = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;
const InfoSection = styled.div`
  width: 400px;
  border: 1px solid black;
`;
export { VenueLayOut, ImageSection, InfoSection };
