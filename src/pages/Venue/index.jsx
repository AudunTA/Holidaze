import React from "react";
import Header from "../../components/Layout/Header/Index";
//styles
import {
  MarginBottomContainer,
  CenterContainer,
} from "../../styles/Layout.styled";
import * as S from "../../styles/Text.styled";
import { singleVenue } from "../../components/API/venue";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PrimaryButton } from "../../styles/Buttons.styled";
import {
  ImageSection,
  InfoSection,
  VenueLayOut,
  BookingSection,
} from "./Venue.styled";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import DateRangePicker from "../../components/DateRangePicker";
//icons
import StarRateIcon from "@mui/icons-material/StarRate";
import WifiIcon from "@mui/icons-material/Wifi";
import PetsIcon from "@mui/icons-material/Pets";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
//error image
import noImage from "../../assets/images/noImage.png";

/**
 * Venue component .
 *
 * @component
 * @returns {JSX.Element} The rendered Venue component with its content for a single venue.
 */
function Venue() {
  let params = useParams();
  const [venue, setVenue] = useState();
  useEffect(() => {
    const fetchVenue = async () => {
      const response = await singleVenue(params.id);
      setVenue(response);
    };

    fetchVenue();
  }, [params.id]);
  return (
    <MarginBottomContainer>
      <CenterContainer>
        {venue ? (
          <>
            <VenueLayOut>
              <ImageSection>
                <img
                  src={venue.media[0] ? venue.media[0] : noImage}
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = noImage;
                  }}
                ></img>
                <InfoSection>
                  <div className="top">
                    <S.Heading>{venue.name}</S.Heading>

                    <div className="rating-venue">
                      <StarRateIcon className="star-icon" />
                      <S.TextWhite>{venue.rating}</S.TextWhite>
                    </div>
                  </div>
                  <S.TextBlue>${venue.price} per night</S.TextBlue>
                  <div className="desc">
                    <S.TextGrey>{venue.description}</S.TextGrey>
                  </div>
                  <div className="amenities">
                    <S.SubHeading>Amenities</S.SubHeading>
                    <div className="group-amenities-icon">
                      {venue.meta.wifi ? (
                        <div className="group-text-icon">
                          <WifiIcon className="icon-amenities" />
                          <S.TextWhite>Wifi</S.TextWhite>
                        </div>
                      ) : (
                        ""
                      )}
                      {venue.meta.parking ? (
                        <div className="group-text-icon">
                          <LocalParkingIcon className="icon-amenities" />
                          <S.TextWhite>Parking</S.TextWhite>
                        </div>
                      ) : (
                        ""
                      )}
                      {venue.meta.breakfast ? (
                        <div className="group-text-icon">
                          <RestaurantIcon className="icon-amenities" />
                          <S.TextWhite>Breakfast</S.TextWhite>
                        </div>
                      ) : (
                        ""
                      )}
                      {venue.meta.pets ? (
                        <div className="group-text-icon">
                          <PetsIcon className="icon-amenities" />
                          <S.TextWhite>Pets</S.TextWhite>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="host-section">
                    <div className="venue-host-info">
                      <img
                        className="venue-host-avatar"
                        src={venue.owner.avatar}
                      ></img>
                    </div>
                    <div className="name">
                      <S.TextGrey>{venue.owner.name}</S.TextGrey>
                      <S.TextWhite>Host</S.TextWhite>
                    </div>
                  </div>
                </InfoSection>
              </ImageSection>
              <BookingSection>
                <DateRangePicker
                  bookings={venue.bookings}
                  venueId={venue.id}
                  maxGuests={venue.maxGuests}
                />
              </BookingSection>
            </VenueLayOut>
          </>
        ) : (
          "no venue found, check if the url is correct or go back home"
        )}
      </CenterContainer>
    </MarginBottomContainer>
  );
}

export default Venue;
