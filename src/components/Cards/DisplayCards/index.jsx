import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DisplayCard } from "./DisplayCards.styled";
import { CardContainer } from "../Cards.styled";
function DisplayCards() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.venues);
  console.log("STATEEEE", state);
  return (
    <CardContainer>
      {state.venues.slice(0, 9).map((ele) => {
        return (
          <DisplayCard>
            <div className="card-left">
              <img src={ele.media[0]} className="card-image"></img>
            </div>
            <div className="card-right">
              <h2 className="card-heading">{ele.name}</h2>
              <p className="card-text">{ele.description}</p>
            </div>
          </DisplayCard>
        );
      })}
    </CardContainer>
  );
}

export default DisplayCards;
