import React, { ChangeEvent, useState } from "react";

export type InputType = {
  [name: string]: string;
};

type ErrorType = {
  [key: string]: string;
};

const useForm = (initialValue: InputType, submitFn: () => void) => {
  const [state, setState] = useState<InputType>(initialValue);
  const [error, setError] = useState<ErrorType>({});

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    setState({ ...state, [name]: val });
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    submitFn?.();
    const errorContainer: ErrorType = {};
    for (let key in state) {
      if (!state[key]) errorContainer[key] = `${key} cannot be null`;
    }

    setError(errorContainer);
  };

  return { state, error, submitHandler, changeInputHandler };
};

export default useForm;
