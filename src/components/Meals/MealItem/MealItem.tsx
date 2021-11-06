import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import MealItemForm from "./MealItemForm";

import { Meal } from "../../../model/meals";
import { onAdd } from "../../../store/cartSlice";

const StyledMealItem = styled("li")`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;

  a {
    text-decoration: none;
    color: var(--color-1);
  }
  .flxgrow {
    flex-grow: 1;
  }
  & h3 {
    margin: 0 0 0.25rem 0;
  }

  img {
    border-radius: 50%50%;
    border: 1px solid var(--color-9);
    margin-right: 1rem;
  }

  .description {
    font-style: italic;
  }

  .price {
    margin-top: 0.25rem;
    font-weight: bold;
    color: var(--color-5);
    font-size: 1.25rem;
  }
`;

interface Props {
  className?: string;
  mealItem: Meal;
}
const MealItem = ({ className, mealItem }: Props) => {
  const dispatch = useDispatch();

  const { name, description, price, thumbImg, objectId: id } = mealItem;
  const addToCartHandler = (amount: number) => {
    const mealItemSubmitted = {
      ...mealItem,
      amount: amount,
    };
    dispatch(onAdd(mealItemSubmitted));
  };
  return (
    <StyledMealItem>
      <img src={thumbImg} height={100} alt={name} />
      <div className="flxgrow">
        <h3>
          <Link to={`/meal/${name}`}>{name}</Link>
        </h3>
        <div className="description">{description}</div>
        <div className="price">{`$${price?.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm mealItemId={id} onAddToCart={addToCartHandler} />
      </div>
    </StyledMealItem>
  );
};

export default MealItem;
