import React from "react";
import { DUMMY_MEALS } from "../../data/dummy-meal";
import styled from "styled-components";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const StyledAvailableMeals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  @keyframes meals-appear {
    from {
      opacity: 0;
      transform: translateY(3rem);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const AvailableMeals = () => {
  return (
    <StyledAvailableMeals>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Card>
    </StyledAvailableMeals>
  );
};

export default AvailableMeals;
