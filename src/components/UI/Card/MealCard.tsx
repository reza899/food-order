import React from "react";
import styled from "styled-components";
import { Meal } from "../../../model/meals";

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
  return (
    <Wrapper>
      <img className="img" src={meal.thumbImg} alt={meal.name} height={500} />
      <h4>Instruction: </h4>
      <p className="instruction">{meal.instrution}</p>
      <p className="tag">Tags: {meal.tags?.map((tag) => `${tag} `)}</p>
    </Wrapper>
  );
};

export default MealCard;
