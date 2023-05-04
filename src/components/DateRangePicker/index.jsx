import React from "react";
import { RangePickerContainer } from "./DateRangePicker.styled";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useEffect } from "react";
function DateRangePicker({ disabledDatesVenue }) {
  const [venue, setVenue] = useState();
  const [loader, setLoader] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [disabledDates, setDisabledDates] = useState([]);

  const handleLog = () => {
    console.log(disabledDatesVenue);
  };

  return (
    <RangePickerContainer>
      <DateRange
        className="date-picker"
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
        disabledDates={disabledDates}
      />
      <PrimaryButton onClick={handleLog}>
        <p>Book Now</p>
      </PrimaryButton>
    </RangePickerContainer>
  );
}

export default DateRangePicker;
