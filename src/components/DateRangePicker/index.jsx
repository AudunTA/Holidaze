import React from "react";
import { RangePickerContainer } from "./DateRangePicker.styled";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { createBooking } from "../API/booking";
import { useAuthUser } from "react-auth-kit";
function DateRangePicker({ bookings, venueId }) {
  const auth = useAuthUser();
  let token;
  if (auth()) {
    token = auth().token;
  }
  const [currentDate, setCurrentDate] = useState(new Date());
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [disabledDates, setDisabledDates] = useState([]);
  const [guests, setGuests] = useState();
  const handleLog = () => {
    console.log(disabledDates);
  };
  const findDaysBetween = (dateFrom, dateTo) => {
    let datesToDisable = [];
    let currentDate = dayjs(dateFrom);
    const endDate = dayjs(dateTo);
    while (currentDate.isBefore(endDate)) {
      datesToDisable.push(currentDate.toDate());
      currentDate = currentDate.add(1, "day");
    }
    return datesToDisable;
  };

  useEffect(() => {
    if (bookings) {
      let allDisabledDates = [];
      bookings.forEach((ele) => {
        const datesToDisable = findDaysBetween(ele.dateFrom, ele.dateTo);
        allDisabledDates = [...allDisabledDates, ...datesToDisable];
      });
      setDisabledDates(allDisabledDates);
    }
  }, [bookings]);
  const handleCreateBooking = () => {
    const bodyObj = {
      dateFrom: state[0].startDate,
      dateTo: state[0].endDate,
      guests: 1,
      venueId: venueId,
    };
    createBooking(bodyObj, token);
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
      {bookings ? (
        <PrimaryButton onClick={handleCreateBooking}>
          Make a reservation
        </PrimaryButton>
      ) : (
        ""
      )}
      <button onClick={() => console.log(state)}>log dates</button>
    </>
  );
}

export default DateRangePicker;
