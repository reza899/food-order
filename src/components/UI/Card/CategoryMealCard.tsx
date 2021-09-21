import React from "react";
import styled from "styled-components";
import { MealCategory } from "../../../model/meals";
import Button from "../Button";

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
  p.description {
    padding: 1rem;
  }
`;

interface Props {
  mealsCategory: MealCategory[];
  clickHandler: (param: string) => void;
}

const CategoryMealCard = ({ clickHandler, mealsCategory }: Props) => {
  return (
    <Wrapper>
      {mealsCategory &&
        mealsCategory.map((mealCat) => {
          return (
            <div key={mealCat.name} className="item">
              <h3 className="header">{mealCat.name}</h3>
              <img src={mealCat.thumbImg} alt={mealCat.name} height={100} />
              {mealCat.description && (
                <p className="description">
                  {mealCat.description.slice(0, 100)}...
                </p>
              )}
              <Button onClick={() => clickHandler(mealCat.name.toLowerCase())}>
                See More...
              </Button>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default CategoryMealCard;
