import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Summary from "../../components/UI/Summary";
import { Meal } from "../../model/meals";
import { randomMeal } from "../../service/mealAgent";

export type APIMeal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 5px 10px 8px #383838;

  img {
    border-radius: 5% 5%;
    border: 1px solid #383838;
    margin: 0 0;
    position: relative;
    height: 500px;

    @media only screen and (max-width: 400px) {
      height: 200px;
    }

    @media only screen and (max-width: 700px) {
      height: 300px;
    }
  }

  p.tag {
    font-size: 10px;
    color: gray;
    align-self: flex-start;
  }

  .instruction {
    line-height: 30px;
  }
`;

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
        <Wrapper>
          <img
            className="img"
            src={meal.thumbImg}
            alt={meal.name}
            height={500}
          />
          <h4>Instruction: </h4>
          <p className="instruction">{meal.instrution}</p>
          <p className="tag">Tags: {meal.tags?.map((tag) => `${tag} `)}</p>
        </Wrapper>
      </div>
    </>
  );
};

export default RandomMeal;
