import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplayCard } from "./DisplayCards.styled";
import { CardContainer } from "../Cards.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import * as S from "../../../styles/Text.styled";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//icons
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarRateIcon from "@mui/icons-material/StarRate";
function DisplayCards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  const [currentVenues, setCurrentVenues] = useState([]);
  useEffect(() => {
    if (!state.filteredVenues.length == 0) {
      console.log(state.filteredVenues);
      setCurrentVenues(state.filteredVenues);
    } else {
      setCurrentVenues(state.venues);
    }
  }, [state]);

  return (
    <CardContainer>
      {currentVenues
        ? currentVenues.map((ele) => {
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
                          <S.TextWhite>{ele.rating}.0</S.TextWhite>
                        </div>
                      </div>

                      <S.TextGrey>
                        {ele.location.city !== "Unknown"
                          ? ele.location.city.slice(0, 30)
                          : ele.description.slice(0, 30)}{" "}
                      </S.TextGrey>
                    </div>

                    <S.TextBlue>${ele.price} per night</S.TextBlue>
                  </div>
                </DisplayCard>
              </Link>
            );
          })
        : ""}
      {}
    </CardContainer>
  );
}

export default DisplayCards;
