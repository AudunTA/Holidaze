import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplayCard } from "./DisplayCards.styled";
import { CardContainer } from "../Cards.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
import * as S from "../../../styles/Text.styled";
import { Link } from "react-router-dom";
function DisplayCards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  //console.log("STATEEEE", state);
  return (
    <CardContainer>
      {state.venues.slice(0, 9).map((ele) => {
        return (
          <Link to={`/Venue?id=${ele.id}`}>
            <DisplayCard key={ele.id}>
              <div className="card-left">
                <img src={ele.media[0]} className="card-image"></img>
              </div>
              <div className="card-right">
                <div className="info">
                  <S.SubHeading>{ele.name.slice(0, 20)}</S.SubHeading>
                  <S.TextGrey>
                    {ele.location.city !== "Unknown"
                      ? ele.location.city.slice(0, 40)
                      : ele.description.slice(0, 40)}{" "}
                  </S.TextGrey>
                </div>
                <PrimaryButton>
                  <S.TextWhite>See More</S.TextWhite>
                </PrimaryButton>
              </div>
            </DisplayCard>
          </Link>
        );
      })}
    </CardContainer>
  );
}

export default DisplayCards;
