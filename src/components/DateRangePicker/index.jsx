import React from "react";
import { RangePickerContainer, WrapperButton } from "./DateRangePicker.styled";
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
  const [disabledDates, setDisabledDates] = useState([]);
  const [guests, setGuests] = useState(null);
  const [errorReservation, setErrorReservation] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  useEffect(() => {
    console.log(state);
  }, [state]);
  //short validation to make sure guests are picked correctly
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
  const findDaysBetween = (dateFrom, dateTo) => {
    let datesToDisable = [];
    let currentDate = dayjs(dateFrom);
    console.log(currentDate.toDate());
    datesToDisable.push(currentDate.toDate());
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
        console.log("original date: ", ele.dateFrom);
        console.log("first test: ", dayjs(ele.dateFrom).format("MM/DD/YYYY"));
        console.log("second test: ", dayjs(ele.dateFrom).toDate());
        console.log(ele.dateTo);
        console.log("disabled dates:", disabledDates);
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
          <label htmlFor="rating">number of guest (max {maxGuests})</label>
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
