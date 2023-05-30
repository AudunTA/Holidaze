import React from "react";
import {
  RangePickerContainer,
  WrapperButton,
  InputLabel,
} from "./DateRangePicker.styled";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import { createBooking } from "../API/booking";
import { useAuthUser } from "react-auth-kit";
import { UserInput } from "../../styles/Inputs.styled";
import * as S from "../../styles/Text.styled";
function DateRangePicker({ bookings, venueId, maxGuests }) {
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
  //use states
  const [disabledDates, setDisabledDates] = useState([]);
  const [guests, setGuests] = useState(null);
  const [errorReservation, setErrorReservation] = useState("");
  //validation state for booking.
  const [isValidated, setIsValidated] = useState(false);

  //short validation to make sure guests are a valid number.
  /**
   * Handle guests validation and update the state accordingly.
   *
   * @param {Event} e - The event object.
   */
  const handleGuestsValidation = (e) => {
    console.log(e.target.value);
    if (isNaN(Number(e.target.value))) {
      setErrorReservation("must be a number");
      setIsValidated(false);
    } else {
      setErrorReservation("");
      if (Number(e.target.value) > maxGuests) {
        setErrorReservation(`Too many guests`);
        setIsValidated(false);
      } else {
        setErrorReservation("");
        setIsValidated(true);
        setGuests(e.target.value);
      }
    }
    if (!e.target.value) {
      setIsValidated(false);
    }
  };
  /**
   * Find all the days between two dates, inclusive.
   *
   * @param {string} dateFrom - The starting date (in string format).
   * @param {string} dateTo - The ending date (in string format).
   * @returns {Date[]} - An array of Date objects representing the days between the two dates.
   */
  const findDaysBetween = (dateFrom, dateTo) => {
    let datesToDisable = [];
    let currentDate = dayjs(dateFrom);
    datesToDisable.push(currentDate.toDate());
    const endDate = dayjs(dateTo);
    datesToDisable.push(endDate.toDate());
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
      guests: Number(guests),
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
      {bookings && auth() ? (
        <>
          <InputLabel>number of guest (max {maxGuests})</InputLabel>
          <UserInput onChange={handleGuestsValidation}></UserInput>
          {errorReservation ? (
            <S.TextError>{errorReservation}</S.TextError>
          ) : (
            ""
          )}
          <WrapperButton>
            <PrimaryButton
              onClick={handleCreateBooking}
              disabled={!isValidated}
              className="btn_reservation"
            >
              Make a reservation
            </PrimaryButton>
          </WrapperButton>
        </>
      ) : (
        <S.TextWhite> please log in to make a booking</S.TextWhite>
      )}
    </>
  );
}

export default DateRangePicker;
