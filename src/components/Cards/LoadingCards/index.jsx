import React from "react";
import { LoadingCard } from "./LoadingCards.styled";
import { CardContainer } from "../Cards.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function LoadingCards() {
  return (
    <LoadingCard>
      <div className="card-left">
        <Skeleton
          style={{ width: "auto" }}
          baseColor="var(--text-color-light)"
          highlightColor="var(--text-color-highlight)"
          className="skeleton-loading-image"
        ></Skeleton>
      </div>
      <div className="card-right">
        <Skeleton
          style={{ width: "auto" }}
          baseColor="var(--text-color-light)"
          highlightColor="var(--text-color-highlight)"
          className="skeleton-loading-heading"
        ></Skeleton>
        <Skeleton
          style={{ width: "auto" }}
          baseColor="var(--text-color-light)"
          highlightColor="var(--text-color-highlight)"
          className="skeleton-loading-text"
        ></Skeleton>
      </div>
    </LoadingCard>
  );
}

export default LoadingCards;
