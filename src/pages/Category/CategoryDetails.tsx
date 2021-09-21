import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { filterByCategory } from "../../service/mealAgent";

type MealsCategoryFiltered = {
  strMeal: string;
  strMealThumb: string;
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: darkgray;
  padding: 2px 16px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 30%;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
  }
`;

const CategoryDetails = () => {
  const [mealList, setMealList] = useState<MealsCategoryFiltered[]>(
    [] as MealsCategoryFiltered[]
  );
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams<{ name: string }>();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const resp = await filterByCategory(params.name);
      const meals: MealsCategoryFiltered[] = (await resp.data).meals;

      setMealList(meals);
      setIsLoading(false);
    }

    fetchData();
  }, [params.name]);

  const categoryClickHandler = (categoryName: string) => {
    history.push(`/meal/${categoryName.toLowerCase()}`);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1>Category Details</h1>
      <h2>{params.name}</h2>
      <Wrapper>
        {mealList &&
          mealList.map((meal) => {
            return (
              <div key={meal.strMeal} className="item">
                <h3 className="header">{meal.strMeal}</h3>
                <img src={meal.strMealThumb} alt={meal.strMeal} height={100} />
                <button onClick={() => categoryClickHandler(meal.strMeal)}>
                  See More...
                </button>
              </div>
            );
          })}
      </Wrapper>
    </>
  );
};

export default CategoryDetails;
