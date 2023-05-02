import styled from "styled-components";

const VenuesForm = styled.form``;

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
export { VenuesForm, FormLabel, GroupedInputs };
