import React, { useEffect, useState } from "react";
import { listMealByCategories } from "../../service/mealAgent";
import { MealCategory } from "../../model/meals";
import styled from "styled-components";
import { useHistory } from "react-router";

type APICategory = {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
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

const CategoryList = () => {
  const [catList, setCatList] = useState<MealCategory[]>([] as MealCategory[]);
  const history = useHistory();

  useEffect(() => {
    const categoryList: MealCategory[] = [];

    async function fetchData() {
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
    }

    fetchData();
  }, []);

  const categoryClickHandler = (categoryName: string) => {
    history.push(`/category/${categoryName.toLowerCase()}`);
  };
  
  return (
    <>
      <h1>Category List</h1>
      <Wrapper>
        {catList &&
          catList.map((cat) => {
            return (
              <div className="item">
                <h3 className="header">{cat.name}</h3>
                <img src={cat.thumbImg} alt={cat.name} height={100} />
                <p>{cat.description.slice(0, 100)}...</p>
                <button onClick={() => categoryClickHandler(cat.name)}>
                  See More...
                </button>
              </div>
            );
          })}
      </Wrapper>
    </>
  );
};

export default CategoryList;
