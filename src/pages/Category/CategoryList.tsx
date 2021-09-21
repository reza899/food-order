import React, { useEffect, useState } from "react";
import { listMealByCategories } from "../../service/mealAgent";
import { MealCategory } from "../../model/meals";
import { useHistory } from "react-router";
import Loading from "../../components/UI/Loading";
import CategoryMealCard from "../../components/UI/Card/CategoryMealCard";

type APICategory = {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const CategoryList = () => {
  const [catList, setCatList] = useState<MealCategory[]>([] as MealCategory[]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const categoryList: MealCategory[] = [];

    async function fetchData() {
      setIsLoading(true);
      const resp = await listMealByCategories();
      const cats: APICategory[] = (await resp.data).categories;

      cats.map((cat) =>
        categoryList.push({
          name: cat.strCategory,
          description: cat.strCategoryDescription,
          thumbImg: cat.strCategoryThumb,
        })
      );

      setCatList(categoryList);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const categoryClickHandler = (param: string) => {
    history.push(`/category/${param}`);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <h1>Category List</h1>
      <CategoryMealCard mealsCategory={catList} clickHandler={categoryClickHandler} />
    </>
  );
};

export default CategoryList;
