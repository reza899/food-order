import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import Summary from "./Summary";
import MealItemForm from "../../Meals/MealItem/MealItemForm";

import { Meal } from "../../../model/meals";
import { onAdd } from "../../../store/cartSlice";

interface Props {
  meal: Meal;
  topHeader: string;
}

const MealSummary = ({ meal, topHeader }: Props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (amount: number) => {
    const mealItemSubmitted = {
      ...meal,
      amount: amount,
    };
    dispatch(onAdd(mealItemSubmitted));
  };

  return (
    <Summary>
      <h3>{topHeader}</h3>
      <h1>
        {meal.name} / ${meal.price}
      </h1>
      <p>
        Category:
        <Link
          to={`/category/${meal.category?.name}`}
          style={{ color: "var(--color-9)", fontSize: "0.8rem" }}
        >
          <span> {meal.category?.name}</span>
        </Link>
      </p>
      <p>
        Area:
        <Link
          to={`/area/${meal.area?.name}`}
          style={{ color: "var(--color-9)", fontSize: "0.8rem" }}
        >
          <span>{meal.area?.name}</span>
        </Link>
      </p>
      <hr />

      <MealItemForm mealItemId={meal.objectId} onAddToCart={addToCartHandler} />
    </Summary>
  );
};

export default MealSummary;
