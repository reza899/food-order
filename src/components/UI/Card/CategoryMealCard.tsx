import styled from "styled-components";

import Button from "../Button";
import { FaArrowCircleRight } from "react-icons/fa";

import { MealCategory } from "../../../model/meals";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 2px 16px;

  .item {
    flex-basis: 450px;
    display: grid;
    align-items: center;
    justify-items: center;
    margin: 10px 10px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    transition: 350ms opacity ease-in 1ms;
    opacity: 0.8;
    background-color: #fff;
    border-radius: 14px;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
  }
  p.description {
    padding: 1rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    /* margin: 1rem; */
    border-radius: 10px;
    justify-self: stretch;
    /* min-height: 250px; */
  }

  .addbtn {
    width: 100%;
    margin: 1rem;
  }
`;

interface Props {
  mealsCategory: MealCategory[];
  clickHandler: (param: string) => void;
}

const CategoryMealCard = ({ clickHandler, mealsCategory }: Props) => {
  return (
    <Wrapper>
      {mealsCategory &&
        mealsCategory.map((mealCat) => {
          return (
            <div key={mealCat.name} className="item">
              <h2 className="header">{mealCat.name}</h2>
              <img src={mealCat.thumbImg} alt={mealCat.name} />
              {mealCat.description && (
                <p className="description">
                  {mealCat.description.slice(0, 100)}...
                </p>
              )}
              <Button
                className="span-col2"
                onClick={() => clickHandler(mealCat.name.toLowerCase())}
              >
                <span style={{ padding: "5px" }}>See More </span>
                <FaArrowCircleRight
                  size="1rem"
                  color="#fff"
                  style={{ verticalAlign: "text-bottom" }}
                />
              </Button>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default CategoryMealCard;
