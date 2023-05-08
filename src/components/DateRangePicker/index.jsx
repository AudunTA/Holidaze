import React from "react";
import { RangePickerContainer } from "./DateRangePicker.styled";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useEffect } from "react";
import dayjs from "dayjs";
function DateRangePicker({ bookings }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [disabledDates, setDisabledDates] = useState([]);
  const handleLog = () => {
    console.log(disabledDates);
  };
  useEffect(() => {
    if (bookings) {
      bookings.map((ele) => {
        console.log(ele.dateFrom, ele.dateTo);
        findDaysBetween(ele.dateFrom, ele.dateTo);
      });
    } else {
      console.log("no bookings");
    }
  }, [bookings]);
  const findDaysBetween = (dateFrom, dateTo) => {
    let datesToDisable = [];
    let currentDate = dayjs(dateFrom);
    const endDate = dayjs(dateTo);
    while (currentDate.isBefore(endDate)) {
      console.log("TRUE");
      datesToDisable.push(currentDate.toDate());
      currentDate = currentDate.add(1, "day");
    }
    setDisabledDates([...disabledDates, ...datesToDisable]);
  };
  return (
    <>
      <RangePickerContainer>
        <DateRange
          className="date-picker"
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          minDate={currentDate}
          disabledDates={disabledDates}
        />
      </RangePickerContainer>
      <button onClick={handleLog}>logDisabled</button>
    </>
  );
}

export default DateRangePicker;
