import React, { useEffect, useState } from "react";
import Loading from "../../components/UI/Loading";
import { useHistory, useParams } from "react-router";
// import styled from "styled-components";
import CategoryDetailsCard from "../../components/UI/Card/CategoryDetailsCard";
import CategorySummary from "../../components/UI/Summary/CategorySummary";
import { APIMealsCategory } from "../../model/api-meals";
import { MealCategory } from "../../model/meals";
import { useFilterByCategoryQuery } from "../../service/mealApi";

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-content: center;
//   background-color: darkgray;
//   padding: 2px 16px;

//   .item {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin: 10px 10px;
//     padding: 2rem;
//     position: relative;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//     transition: 0.3s;
//     width: 30%;

//     &:hover {
//       box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//     }
//   }
// `;

const CategoryDetails = () => {
  const [mealList, setMealList] = useState<MealCategory[]>(
    [] as MealCategory[]
  );
  // const [isLoading, setIsLoading] = useState(false);
  const { name } = useParams<{ name: string }>();
  const history = useHistory();
  const { isFetching, data } = useFilterByCategoryQuery(name);

  useEffect(() => {
    const meals: APIMealsCategory[] | undefined = data;

    const mealListArray: MealCategory[] = [] as MealCategory[];

    meals &&
      meals.map((meal) =>
        mealListArray.push({
          objectId: meal.idMeal,
          name: meal.strMeal,
          thumbImg: meal.strMealThumb,
        })
      );

    setMealList(mealListArray);
  }, [name, data]);

  const categoryClickHandler = (categoryName: string) => {
    history.push(`/meal/${categoryName.toLowerCase()}`);
  };

  if (isFetching) return <Loading />;

  return (
    <>
      <CategorySummary cat={name} topHeader="Category Details" />
      <CategoryDetailsCard
        mealsCategory={mealList}
        clickHandler={categoryClickHandler}
      />
    </>
  );
};

export default CategoryDetails;
