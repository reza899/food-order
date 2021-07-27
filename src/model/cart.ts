import { Meal } from "./meals";

export interface Cart {
  items: Meal[];
  totalAmount: number;
  addItem: (item: Meal) => void;
  removeItem: (id: string) => void;
}
