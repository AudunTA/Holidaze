import React from "react";
import Header from "../../components/Layout/Header/Index";
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
import dayjs from "dayjs";
import DateRangePicker from "../../components/DateRangePicker";
import { parseISO } from "date-fns";

function Venue() {
  let params = useParams();
  const [venue, setVenue] = useState();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const fetchVenue = async () => {
      const response = await singleVenue(params.id);
      setVenue(response);
    };

    fetchVenue();
  }, [params.id]);
  return (
    <>
      <CenterContainer>
        {venue ? (
          <VenueLayOut>
            <ImageSection>
              <img src={venue.media[0]}></img>
            </ImageSection>
            <InfoSection>
              <p>{venue.description}</p>

              <DateRangePicker bookings={venue.bookings} />
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
