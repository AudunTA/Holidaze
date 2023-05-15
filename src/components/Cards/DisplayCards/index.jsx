import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplayCard, DisplayCardWrapper } from "./DisplayCards.styled";
import { CardContainer } from "../Cards.styled";
import { ButtonInverted, PrimaryButton } from "../../../styles/Buttons.styled";
import * as S from "../../../styles/Text.styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//icons
import StarRateIcon from "@mui/icons-material/StarRate";

import LoadingCards from "../LoadingCards";
function DisplayCards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  const [showMoreLoader, setShowMoreLoader] = useState(false);
  const [currentVenues, setCurrentVenues] = useState([]);
  const [visableVenues, setVisableVenues] = useState(6);
  useEffect(() => {
    if (!state.filteredVenues.length == 0) {
      console.log(state.filteredVenues);
      setCurrentVenues(state.filteredVenues);
    } else {
      setCurrentVenues(state.venues);
    }
  }, [state]);
  const handleShowMore = () => {
    setShowMoreLoader(true);
    setTimeout(() => {
      setVisableVenues(visableVenues + 6);
      setShowMoreLoader(false);
    }, 500);
  };
  return (
    <DisplayCardWrapper>
      <CardContainer>
        {currentVenues.length > 0 ? (
          currentVenues.slice(0, visableVenues).map((ele) => {
            return (
              <Link to={`/Venue/${ele.id}`} key={ele.id}>
                <DisplayCard>
                  <div className="card-left">
                    <img src={ele.media[0]} className="card-image"></img>
                  </div>
                  <div className="card-right">
                    <div className="info">
                      <div className="info-top">
                        <S.SubHeading>{ele.name.slice(0, 20)}</S.SubHeading>
                        <div className="star-rating">
                          <StarRateIcon className="icon-star" />
                          <S.TextWhite>{ele.rating}</S.TextWhite>
                        </div>
                      </div>
                      <S.TextGrey>
                        {ele.location.city !== "Unknown"
                          ? ele.location.city.slice(0, 30)
                          : ele.description.slice(0, 30)}
                      </S.TextGrey>
                    </div>
                    <S.TextBlue>${ele.price} per night</S.TextBlue>
                  </div>
                </DisplayCard>
              </Link>
            );
          })
        ) : (
          <LoadingCards number={6} />
        )}
        {showMoreLoader ? <LoadingCards number={6} /> : ""}
      </CardContainer>
      {currentVenues.length > visableVenues ? (
        <ButtonInverted className="btn_showMore" onClick={handleShowMore}>
          <p>Show more</p>
        </ButtonInverted>
      ) : (
        ""
      )}
    </DisplayCardWrapper>
  );
}

export default DisplayCards;
