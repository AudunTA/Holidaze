import styled from "styled-components";

const VenueLayOut = styled.div`
  display: flex;
  .date-picker-venue {
    margin: 10px;
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
  .rdrMonthPicker {
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
    border: 1px solid var(--border);
    border-radius: var(--main-border-radius);
  }
`;
const BookingSection = styled.div`
  min-width: 300px;
  max-width: 400px;
  height: 100%;
  border: 1px solid var(--border);
  border-radius: var(--main-border-radius);
  padding: 10px;
  margin-left: 10px;
`;
const InfoSection = styled.div`
  .top {
    h1 {
      margin: 0;
      font-size: 25px;
    }
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .rating-venue {
      display: flex;
      align-items: center;
      .star-icon {
        color: #f3b200;
        font-size: 17px;
      }
    }
  }
  .desc {
    margin-top: 5px;
  }
  .amenities {
    margin-top: 10px;
    .group-amenities-icon {
      display: flex;
      .group-text-icon {
        margin-top: 10px;
        margin-right: 5px;
        display: flex;
        align-items: center;
        border: 1px solid var(--border);
        border-radius: var(--main-border-radius);

        padding: 5px;
        .icon-amenities {
          color: var(--text-color-main);
          margin-right: 5px;
        }
      }
    }
  }
  .host-section {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    .venue-host-avatar {
      width: 42px;
      height: 42px;
      object-fit: cover;
      border-radius: 66.7%;
      border: 1px solid var(--border);
    }
    .name {
      height: 42px;
      p {
        margin-left: 10px;
        line-height: 16px;
      }
    }
  }
`;
export { VenueLayOut, ImageSection, InfoSection, BookingSection };
