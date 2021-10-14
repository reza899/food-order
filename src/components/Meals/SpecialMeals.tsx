import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { APIMeal } from "../../model/api-meals";
import { Meal } from "../../model/meals";
import { randomMeal } from "../../service/mealAgent";
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

const SpecialMeals = () => {
  const [meals, setMeals] = useState<Meal[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const randomMeals: Meal[] = [];
    async function fetchData() {
      setIsLoading(true);
      for (let i = 0; i < 4; i++) {
        const resp = await randomMeal();
        const rand: APIMeal = (await resp.data).meals[0];
        randomMeals.push({
          name: rand.strMeal,
          objectId: rand.idMeal,
          price: Number((Math.random() * 12.5).toFixed(2)),
          description: rand.strArea,
        });
      }
      setMeals(randomMeals);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <StyledAvailableMeals>
      <Card>
        <h1>Today's Specials</h1>
        <ul>
          {meals?.map((meal) => (
            <MealItem key={meal.objectId} mealItem={meal} />
          ))}
        </ul>
      </Card>
    </StyledAvailableMeals>
  );
};

export default SpecialMeals;
