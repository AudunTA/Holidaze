import React from "react";
import { LoadingContainer, Card } from "./LoadingCards.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function LoadingCards({ number }) {
  console.log(number);
  const cards = [];
  for (let i = 0; i < number; i++) {
    cards.push(
      <Card key={i}>
        <Skeleton
          style={{ width: "auto" }}
          baseColor="var(--background-color)"
          highlightColor="hsla(0, 0%, 100%, 0.1)"
          className="skeleton-loading-image"
        ></Skeleton>
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
      </Card>
    );
  }
  return <LoadingContainer>{cards}</LoadingContainer>;
}

export default LoadingCards;
