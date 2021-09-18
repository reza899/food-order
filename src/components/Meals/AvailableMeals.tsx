import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Meal } from "../../model/meals";
import request from "../../service/agent";
import Card from "../UI/Card";
import Loading from "../UI/Loading";
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

  &.MealsLoading {
    text-align: center;
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
  const [meals, setMeals] = useState<Meal[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await request.get("Meals ");
      setMeals(data.results);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loading />
      </div>
    );
  return (
    <StyledAvailableMeals>
      <Card>
        <ul>
          {meals?.map((meal) => (
            <MealItem key={meal.objectId} mealItem={meal} />
          ))}
        </ul>
      </Card>
    </StyledAvailableMeals>
  );
};

export default AvailableMeals;
