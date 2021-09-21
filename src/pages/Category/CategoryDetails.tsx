import React, { useEffect, useState } from "react";
import Loading from "react-loading";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import CategoryMealCard from "../../components/UI/Card/CategoryMealCard";
import CategorySummary from "../../components/UI/Summary/CategorySummary";
import { APIMealsCategory } from "../../model/api-meals";
import { MealCategory } from "../../model/meals";
import { filterByCategory } from "../../service/mealAgent";

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
  const [mealList, setMealList] = useState<MealCategory[]>(
    [] as MealCategory[]
  );
  const [isLoading, setIsLoading] = useState(false);

  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const resp = await filterByCategory(name);
      const meals: APIMealsCategory[] = (await resp.data).meals;

      const mealListArray: MealCategory[] = [] as MealCategory[];

      meals.map((meal) =>
        mealListArray.push({
          name: meal.strMeal,
          description: "",
          thumbImg: meal.strMealThumb,
        })
      );

      setMealList(mealListArray);
      setIsLoading(false);
    }

    fetchData();
  }, [name]);

  const categoryClickHandler = (categoryName: string) => {
    history.push(`/meal/${categoryName.toLowerCase()}`);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <CategorySummary cat={name} topHeader="Category Details" />
      <CategoryMealCard
        mealsCategory={mealList}
        clickHandler={categoryClickHandler}
      />
    </>
  );
};

export default CategoryDetails;
