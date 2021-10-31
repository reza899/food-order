import { useRef, FormEvent } from "react";
import styled from "styled-components";

import Button from "../../UI/Button";
import Input from "../../UI/Input";

const StyledForm = styled.form`
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        label="Amount"
      />
      <Button type="submit">Add</Button>
    </StyledForm>
  );
};

export default MealItemForm;
