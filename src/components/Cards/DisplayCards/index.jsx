import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplayCard } from "./DisplayCards.styled";
import { CardContainer } from "../Cards.styled";
import { PrimaryButton } from "../../../styles/Buttons.styled";
function DisplayCards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  //console.log("STATEEEE", state);
  return (
    <CardContainer>
      {state.venues.slice(0, 9).map((ele) => {
        return (
          <DisplayCard key={ele.id}>
            <div className="card-left">
              <img src={ele.media[0]} className="card-image"></img>
            </div>
            <div className="card-right">
              <div className="info">
                <h2 className="card-heading">{ele.name.slice(0, 20)}</h2>
                <p className="card-text">
                  {ele.location.city !== "Unknown"
                    ? ele.location.city.slice(0, 40)
                    : ele.description.slice(0, 40)}{" "}
                </p>
              </div>

              <PrimaryButton className="btn-seeMore">
                <p>See More</p>
              </PrimaryButton>
            </div>
          </DisplayCard>
        );
      })}
    </CardContainer>
  );
}

export default DisplayCards;
