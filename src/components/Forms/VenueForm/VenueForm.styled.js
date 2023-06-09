import styled from "styled-components";

const VenuesForm = styled.form`
  .error {
    font-size: 15px;
    color: var(--text-color-error);
    font-family: NeuweltLight;
    line-height: 25px;
  }
  label {
    font-size: 13px;
    color: var(--text-color-main);
    font-family: NeuweltRegular;
    line-height: 15px;
  }
  .group-checkboxes {
    display: flex;
    flex-wrap: wrap;
  }
  .checkbox-flex {
    margin-right: 10px;
    display: flex;
    font-size: 13px;
    color: var(--text-color-main);
    font-family: NeuweltRegular;
    line-height: 15px;
  }
  .amenities-label {
    font-size: 13px;
    color: var(--text-color-main);
    font-family: NeuweltRegular;
    line-height: 15px;
  }
  .btn-container {
    width: 100%;
    display: flex;
  }
  .btn_createVenue {
    width: 100%;
  }
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
const FormGroupRow = styled.div`
  display: flex;
  .first-half {
    margin-right: 5px;
  }
  .second-half {
    margin-left: 5px;
  }
`;
const FromRowHalf = styled.div`
  flex: 1;
`;
export { VenuesForm, GroupedInputs, FormGroupRow, FromRowHalf };
