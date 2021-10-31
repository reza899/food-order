import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Loading from "../../components/UI/Loading";
import CategoryDetailsCard from "../../components/UI/Card/CategoryDetailsCard";
import CategorySummary from "../../components/UI/Summary/CategorySummary";

import { APIMealsCategory } from "../../model/api-meals";
import { MealCategory } from "../../model/meals";
import { useFilterByCategoryQuery } from "../../service/foodApi";

const CategoryDetails = () => {
  const [mealList, setMealList] = useState<MealCategory[]>(
    [] as MealCategory[]
  );

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
