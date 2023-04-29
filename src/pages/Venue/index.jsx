import React from "react";
import Header from "../../components/Header/Index";
import { MarginWrapper, CenterContainer } from "../../styles/Layout.styled";
import * as S from "../../styles/Text.styled";
import { singleVenue } from "../../components/API/venue";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../styles/Buttons.styled";
import { ImageSection, InfoSection, VenueLayOut } from "./Venue.styled";
function Venue() {
  const [venue, setVenue] = useState();
  const [loader, setLoader] = useState(true);
  let params = useParams();
  console.log(params.id);
  useEffect(() => {
    const fetchVenue = async () => {
      const response = await singleVenue(params.id);
      setVenue(response);
    };
    fetchVenue();
  }, [params.id]);

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
