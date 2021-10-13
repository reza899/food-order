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
      const existingItem = state.items.find(
        (item) => item.objectId === action.payload.objectId
      );
      if (existingItem) {
        existingItem.amount! += action.payload.amount!;
      } else {
        state.items.push(action.payload);
      }
      state.totalAmount += action.payload.amount! * action.payload.price;
    },
    onRemove: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item.objectId === action.payload
      )!;
      if (existingItem.amount! > 1) {
        existingItem.amount!--;
      } else {
        existingItem.amount!--;
        state.items = state.items.filter(
          (item) => item.objectId !== action.payload
        );
      }
      state.totalAmount -= existingItem?.price!;
    },
    clear: (state) => {
      return intialCartState;
    },
  },
});

export const { clear, onAdd, onRemove } = cartSlice.actions;

export default cartSlice.reducer;
