import styled from "styled-components";

const SettingContainer = styled.div`
  background-color: var(--text-color-highlight);
  padding: 15px;
  padding-top: 0px;
  padding-left: 30px;
  .pointer {
    cursor: pointer;
    :hover {
      text-decoration: underline;
      color: var(--btn-color-secondary);
    }
  }
`;
const VenueForm = styled.form``;

const FormLabel = styled.label`
  font-family: NeuweltLight;
  color: var(--text-color-main);
`;
const GroupedInputs = styled.div`
  display: flex;
  .group {
    flex: 1;
  }
  .group-left {
    margin-right: 5px;
  }
  .group-right {
    margin-left: 5px;
  }
`;
export { SettingContainer, VenueForm, FormLabel, GroupedInputs };
