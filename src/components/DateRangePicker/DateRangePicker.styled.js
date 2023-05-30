import styled from "styled-components";

const RangePickerContainer = styled.div`
  display: flex;
  .rdrCalendarWrapper {
    width: 100%;
  }
  .rdrMonth {
    width: auto;
  }
  .rdrDateDisplayWrapper {
    background-color: transparent;
    .rdrDateInput {
      background-color: var(--text-color-highlight);

      input {
        font-family: NeuweltLight;
      }
    }
  }
  .date-picker {
    width: 100%;
    background-color: transparent;
    color: black;
    input {
      color: var(--text-color-main);
      background-color: transparent;
    }
  }
  .rdrYearPicker {
    display: none;
  }
  .rdrMonthPicker {
    color: white;
    background-color: white;
    border-radius: var(--main-border-radius);
    border: 1px solid var(--border-color);
    option {
      font-family: NeuweltLight;
    }
  }
  .rdrWeekDay {
    font-family: NeuweltLight;
    color: var(--text-color-light);
  }
  .rdrMonthAndYearWrapper {
    .rdrPprevButton {
      border-radius: 66%;
    }
    .rdrNextButton {
      border-radius: 66%;
    }
  }
  .rdrDayNumber {
    color: var(--text-color-main);
    span {
      font-size: 13px;
      font-family: NeuweltLight;
      color: var(--text-color-main);
    }
  }
  .rdrDayDisabled {
    background-color: var(--text-color-highlight);
    .rdrDayNumber {
      span {
        color: var(--text-color-light);
      }
    }
  }
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
const WrapperButton = styled.div`
  margin-top: 5px;
  .btn_reservation {
    width: 100%;
  }
`;
const InputLabel = styled.div`
  font-family: NeuweltLight;
  font-size: 16px;
  line-height: 20px;
  margin-block-start: 0em;
  margin-block-end: 0em;
  color: var(--text-color-main);
`;
export { RangePickerContainer, WrapperButton, InputLabel };
