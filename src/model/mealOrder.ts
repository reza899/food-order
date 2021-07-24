import { Meal } from "./meals";

export interface MealOrder {
  meal: Partial<Meal>;
  amount: number;
}
