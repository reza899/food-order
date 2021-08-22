import React from "react";
import styled from "styled-components";
import { Meal } from "../../../model/meals";
import { useCartContext } from "../../../store/cart-context";
import MealItemForm from "./MealItemForm";

const StyledMealItem = styled("li")`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  & h3 {
    margin: 0 0 0.25rem 0;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
  }
`;

interface Props {
  className?: string;
  mealItem: Meal;
}
const MealItem = ({ className, mealItem }: Props) => {
  const { addItem } = useCartContext();

  const { name, description, price, objectId: id } = mealItem;
  const addToCartHandler = (amount: number) => {
    const mealItemSubmitted = {
      ...mealItem,
      amount: amount,
    };
    addItem(mealItemSubmitted);
  };
  return (
    <StyledMealItem>
      <div>
        <h3>{name}</h3>
        <div className="description">{description}</div>
        <div className="price">{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm mealItemId={id} onAddToCart={addToCartHandler} />
      </div>
    </StyledMealItem>
  );
};

export default MealItem;
