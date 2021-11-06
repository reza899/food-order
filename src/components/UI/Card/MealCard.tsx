import { useSelector } from "react-redux";

import styled from "styled-components";

import { Meal } from "../../../model/meals";
import { selectCartItems } from "../../../store/store";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 85%;
  margin: 1rem auto;
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 5px 10px 8px #383838;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 5% 5%;

    margin: 0 0;
    position: relative;
  }

  p.tag {
    font-size: 1rem;
    color: var(--color-5);
    align-self: flex-start;
  }

  span {
    color: var(--color-5);
  }

  .instruction {
    line-height: 30px;
  }
`;

interface Props {
  meal: Meal;
}

const MealCard = ({ meal }: Props) => {
  const items = useSelector(selectCartItems);
  const amount = items.find((x) => x.objectId === meal.objectId)?.amount;

  return (
    <div style={{ position: "absolute" }}>
      <Wrapper>
        {amount && (
          <h1>
            Selected <span>{amount}</span> of
          </h1>
        )}
        <img className="img" src={meal.thumbImg} alt={meal.name} height={500} />
        <h3>Instruction: </h3>
        <p className="instruction">{meal.instrution}</p>
        <p className="tag">Tags: {meal.tags?.map((tag) => `${tag} `)}</p>
      </Wrapper>
    </div>
  );
};

export default MealCard;
