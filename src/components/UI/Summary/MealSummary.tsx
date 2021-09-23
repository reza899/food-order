import React from "react";
import { Link } from "react-router-dom";
import { Meal } from "../../../model/meals";
import Summary from "./Summary";

interface Props {
  meal: Meal;
  topHeader: string;
}

const MealSummary = ({ meal, topHeader }: Props) => {
  return (
    <Summary>
      <h3>{topHeader}</h3>
      <h1>{meal.name}</h1>
      <p>
        Category:
        <Link
          to={`/category/${meal.category?.name}`}
          style={{ color: "yellow", fontSize: "0.8rem" }}
        >
          <span> {meal.category?.name}</span>
        </Link>
      </p>
      <p>
        Area:
        <Link
          to={`/area/${meal.area?.name}`}
          style={{ color: "var(--color-4)", fontSize: "0.8rem" }}
        >
          <span>{meal.area?.name}</span>
        </Link>
      </p>
    </Summary>
  );
};

export default MealSummary;
