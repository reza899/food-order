import { Meals } from "./meals";

export interface MealOrder {
  id: string;
  price: number;
  amount: number;
}
export interface Cart {
  items: Meals[];
  totalAmount: number;
  addItem: (item: Meals) => void;
  removeItem: (id: number) => void;
}
