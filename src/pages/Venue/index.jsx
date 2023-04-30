import React from "react";
import Header from "../../components/Header/Index";
import { MarginWrapper, CenterContainer } from "../../styles/Layout.styled";
import * as S from "../../styles/Text.styled";
import { singleVenue } from "../../components/API/venue";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { ImageSection, InfoSection, VenueLayOut } from "./Venue.styled";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
function Venue() {
  let params = useParams();
  const [venue, setVenue] = useState();
  const [loader, setLoader] = useState(true);
  const [bookings, setBookings] = useState([]);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [disabledDates, setDisabledDates] = useState([]);

  useEffect(() => {
    const fetchVenue = async () => {
      const response = await singleVenue(params.id);
      setVenue(response);
      const dates = response.bookings.map(
        (booking) => new Date(booking.dateFrom.slice(0, 10))
      );
      setDisabledDates([...disabledDates, ...dates]);
    };
    fetchVenue();
  }, [params.id]);

  const handleLog = () => {
    console.log(disabledDates);
  };

  return (
    <>
      <Header />
      <CenterContainer>
        {venue ? (
          <VenueLayOut>
            <ImageSection>
              <img src={venue.media[0]}></img>
            </ImageSection>
            <InfoSection>
              <p>{venue.description}</p>

              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                disabledDates={disabledDates}
              />
              <PrimaryButton onClick={handleLog}>
                <p>Book Now</p>
              </PrimaryButton>
            </InfoSection>
          </VenueLayOut>
        ) : (
          ""
        )}
      </CenterContainer>
    </>
  );
}

export default Venue;
