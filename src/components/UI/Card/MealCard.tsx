import React from "react";
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
  width: 50%;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 5px 10px 8px #383838;

  img {
    border-radius: 5% 5%;
    border: 1px solid #383838;
    margin: 0 0;
    position: relative;
    height: 500px;

    @media only screen and (max-width: 400px) {
      height: 200px;
    }

    @media only screen and (max-width: 700px) {
      height: 300px;
    }
  }

  p.tag {
    font-size: 10px;
    color: gray;
    align-self: flex-start;
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
            Selected <span style={{ color: "red" }}>{amount}</span> of
          </h1>
        )}
        <img className="img" src={meal.thumbImg} alt={meal.name} height={500} />
        <h4>Instruction: </h4>
        <p className="instruction">{meal.instrution}</p>
        <p className="tag">Tags: {meal.tags?.map((tag) => `${tag} `)}</p>
      </Wrapper>
    </div>
  );
};

export default MealCard;
