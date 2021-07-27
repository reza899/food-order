import { useRef } from "react";
import { FormEvent } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const StyledForm = styled.form`
  text-align: right;

  & button {
    font: inherit;
    cursor: pointer;
    background-color: #8a2b06;
    border: 1px solid #8a2b06;
    color: white;
    padding: 0.25rem 2rem;
    border-radius: 20px;
    font-weight: bold;
  }

  & button:hover,
  & button:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

interface Props {
  mealItemId: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm = ({ mealItemId, onAddToCart }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const enteredAmount = +ref.current?.value!;
    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    onAddToCart(enteredAmount);
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        input={{
          id: `price_${mealItemId}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
        ref={ref}
        label="Price"
      />
      <button type="submit">Add</button>
    </StyledForm>
  );
};

export default MealItemForm;
