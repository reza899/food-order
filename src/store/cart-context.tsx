import React, { useReducer, useContext } from "react";
import { Cart } from "../model/cart";
import { Meal } from "../model/meals";

const CartContext = React.createContext<Cart>({} as Cart);

type ActionType =
  | { type: "Add"; payload: Meal }
  | { type: "Remove"; payload: string };

const intialCartState: { totalAmount: number; items: Meal[] } = {
  totalAmount: 0,
  items: [],
};

const cartReducer = (
  state: typeof intialCartState,
  action: ActionType
): typeof intialCartState => {
  switch (action.type) {
    case "Add":
      const updatedTotalAmount =
        state.totalAmount + action.payload.amount! * action.payload.price!;
      const existingCartItemIndex = state.items.findIndex(
        (x) => x.id === action.payload.id
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
    case "Remove":
      const existingItemIndex = state.items.findIndex(
        (x) => x.id === action.payload
      );
      const existingItem = state.items[existingItemIndex];

      const updatedTotalAmountRemove = state.totalAmount - existingItem.price;
      let updatedItemsRemove;
      if (existingItem.amount === 1) {
        updatedItemsRemove = state.items.filter((x) => x.id !== action.payload);
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
  }
};

export const CartContextProvider: React.FC = ({ children }) => {
  const [state, dispachCart] = useReducer(cartReducer, intialCartState);

  const addItemToCartHandler = (item: Meal) => {
    dispachCart({ type: "Add", payload: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispachCart({ type: "Remove", payload: id });
  };

  const cartContext: Cart = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;
