import React from "react";
import { Link } from "react-router-dom";
import { Meal } from "../../../model/meals";
import Summary from "./Summary";

interface Props {
  meal: Meal;
}

const MealSummary = ({ meal }: Props) => {
  return (
    <Summary>
      <h3>Meal</h3>
      <h1>{meal.name}</h1>
      <p>
        Category:{" "}
        <Link
          to={`/category/${meal.category?.name}`}
          style={{ color: "yellow", fontSize: "0.8rem" }}
        >
          <span> {meal.category?.name}</span>
        </Link>
      </p>
      <p>Area: {meal.area}</p>
    </Summary>
  );
};

export default MealSummary;
