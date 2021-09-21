import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { Link } from "react-router-dom";
import MealCard from "../../components/UI/Card/MealCard";
import Summary from "../../components/UI/Summary/Summary";
import { APIMeal } from "../../model/api-meals";
import { Meal } from "../../model/meals";
import { randomMeal } from "../../service/mealAgent";

const RandomMeal = () => {
  const [meal, setMeal] = useState<Meal>({} as Meal);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const resp = await randomMeal();
      const rand: APIMeal = (await resp.data).meals[0];

      const randMeal: Meal = {
        objectId: rand.idMeal,
        name: rand.strMeal,
        category: {
          name: rand.strCategory,
          description: "",
          thumbImg: "",
        },
        area: rand.strArea,
        instrution: rand.strInstructions,
        thumbImg: rand.strMealThumb,
        tags: rand.strTags?.split(","),
        description: rand.strInstructions?.split(".")[0],
        price: Number((Math.random() * 12.5).toFixed(2)),
      };

      setMeal(randMeal);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <>
      <Summary>
        <h3>Random Meal</h3>
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
      <div style={{ position: "absolute" }}>
        <MealCard meal={meal} />
      </div>
    </>
  );
};

export default RandomMeal;
