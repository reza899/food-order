import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { Meal } from "../model/meals";

import request from "../service/agent";
import { selectCartItems } from "../store/store";

export type InputType = {
  [name: string]: string;
};

type ErrorType = {
  [key: string]: string;
};

export type CartSubmitting = {
  submitting: boolean;
  didSubmit: boolean;
};

const useCartForm = (
  initialValue: InputType,
  onConfirm: (val: CartSubmitting) => void
) => {
  const [state, setState] = useState<InputType>(initialValue);
  const [error, setError] = useState<ErrorType>({});

  const items = useSelector(selectCartItems);

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: val });
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const errorContainer: ErrorType = {};
    for (let key in state) {
      if (!state[key]) errorContainer[key] = `${key} cannot be null`;
    }

    if (Object.keys(errorContainer).length) {
      setError(errorContainer);
      return;
    } else {
      setError({});
    }

    const orderedItems: Omit<Meal, "objectId">[] = [];
    for (let i in items)
      orderedItems.push({
        name: items[i].name,
        price: items[i].price,
        amount: items[i].amount,
      });

    onConfirm({ didSubmit: false, submitting: true });
    const dataRes = await request.post("/orders", {
      userData: state,
      ordered: JSON.stringify(orderedItems),
    });
    if (dataRes) {
      let newState: InputType = {};
      for (let i in state) {
        newState[i] = "";
      }
      setState(newState);
    }

    onConfirm({ didSubmit: true, submitting: false });
  };

  return { state, error, submitHandler, changeInputHandler };
};

export default useCartForm;
