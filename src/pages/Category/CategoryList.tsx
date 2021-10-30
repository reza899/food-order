import React, { useEffect, useState } from "react";
import { MealCategory } from "../../model/meals";
import { useHistory } from "react-router";
import Loading from "../../components/UI/Loading";
import CategoryMealCard from "../../components/UI/Card/CategoryMealCard";
import { APICategory } from "../../model/api-meals";
import CategorySummary from "../../components/UI/Summary/CategorySummary";
import { useListMealByCategoriesQuery } from "../../service/mealApi";

const CategoryList = () => {
  const [catList, setCatList] = useState<MealCategory[]>([] as MealCategory[]);
  // const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const { isFetching, data } = useListMealByCategoriesQuery();

  useEffect(() => {
    const categoryList: MealCategory[] = [];

    const cats: APICategory[] | undefined = data;

    cats &&
      cats.map((cat) =>
        categoryList.push({
          name: cat.strCategory,
          description: cat.strCategoryDescription,
          thumbImg: cat.strCategoryThumb,
        })
      );

    setCatList(categoryList);
  }, [data]);

  const categoryClickHandler = (param: string) => {
    history.push(`/category/${param}`);
  };

  if (isFetching) return <Loading />;

  return (
    <>
      <CategorySummary topHeader="Category List" />
      <CategoryMealCard
        mealsCategory={catList}
        clickHandler={categoryClickHandler}
      />
    </>
  );
};

export default CategoryList;
