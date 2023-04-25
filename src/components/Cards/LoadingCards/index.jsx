import React from "react";
import { LoadingCard } from "./LoadingCards.styled";
import { CardContainer } from "../Cards.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function LoadingCards({ number }) {
  console.log(number);
  const cards = [];
  for (let i = 0; i < number; i++) {
    cards.push(
      <LoadingCard key={i}>
        <div className="card-left">
          <Skeleton
            style={{ width: "auto" }}
            baseColor="var(--background-color)"
            highlightColor="hsla(0, 0%, 100%, 0.1)"
            className="skeleton-loading-image"
          ></Skeleton>
        </div>
        <div className="card-right">
          <Skeleton
            style={{ width: "auto" }}
            baseColor="var(--background-color)"
            highlightColor="hsla(0, 0%, 100%, 0.1)"
            className="skeleton-loading-heading"
          ></Skeleton>
          <Skeleton
            style={{ width: "auto" }}
            baseColor="var(--background-color)"
            highlightColor="hsla(0, 0%, 100%, 0.1)"
            className="skeleton-loading-text"
          ></Skeleton>
        </div>
      </LoadingCard>
    );
  }
  return <CardContainer>{cards}</CardContainer>;
}

export default LoadingCards;
