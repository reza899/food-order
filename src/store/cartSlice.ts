import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Meal } from "../model/meals";

const intialCartState: { totalAmount: number; items: Meal[] } = {
  totalAmount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: intialCartState,
  reducers: {
    onAdd: (state, action: PayloadAction<Meal>) => {
      const updatedTotalAmount =
        state.totalAmount + action.payload.amount! * action.payload.price!;
      const existingCartItemIndex = state.items.findIndex(
        (x) => x.objectId === action.payload.objectId
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems: Meal[];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: action.payload.amount! + existingCartItem.amount!,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
    onRemove: (state, action: PayloadAction<string>) => {
      const existingItemIndex = state.items.findIndex(
        (x) => x.objectId === action.payload
      );
      const existingItem = state.items[existingItemIndex];

      const updatedTotalAmountRemove = state.totalAmount - existingItem.price;
      let updatedItemsRemove;
      if (existingItem.amount === 1) {
        updatedItemsRemove = state.items.filter(
          (x) => x.objectId !== action.payload
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount! - 1,
        };
        updatedItemsRemove = [...state.items];
        updatedItemsRemove[existingItemIndex] = updatedItem;
      }
      return {
        items: updatedItemsRemove,
        totalAmount: updatedTotalAmountRemove,
      };
    },
    clear: (state) => {
      return intialCartState;
    },
  },
});

export const { clear, onAdd, onRemove } = cartSlice.actions;

export default cartSlice.reducer;
