import styled from "styled-components";
import Input from "../../UI/Input";

const StyledInput = styled.form`
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
  id: string;
}

const MealItemForm = ({ id }: Props) => {
  return (
    <StyledInput>
      <Input
        input={{
          id: `price_${id}`,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
        label="Price"
      />
      <button>Add</button>
    </StyledInput>
  );
};

export default MealItemForm;
