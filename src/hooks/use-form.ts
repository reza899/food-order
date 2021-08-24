import React, { ChangeEvent, useState } from "react";
import { SubmittingType } from "../components/Cart/Cart";
import request from "../service/agent";
import { useCartContext } from "../store/cart-context";

export type InputType = {
  [name: string]: string;
};

type ErrorType = {
  [key: string]: string;
};

const useForm = (
  initialValue: InputType,
  submitFn: () => void,
  onConfirm: (val: SubmittingType) => void
) => {
  const [state, setState] = useState<InputType>(initialValue);
  const [error, setError] = useState<ErrorType>({});

  const { items } = useCartContext();

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: val });
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitFn?.();
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

    const orderedItems: any[] = [];
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
        console.log(i);
      }
      setState(newState);
    }

    onConfirm({ didSubmit: true, submitting: false });
  };

  return { state, error, submitHandler, changeInputHandler };
};

export default useForm;
