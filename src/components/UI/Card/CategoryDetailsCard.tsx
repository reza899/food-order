import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { MealCategory } from "../../../model/meals";
import Button from "../Button";

import { selectCartItems } from "../../../store/store";
import { onAdd } from "../../../store/cartSlice";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: darkgray;
  padding: 2px 16px;

  .cartItem {
    background-color: var(--color-9);
    text-align: center;
    color: var(--color-1);
    font-size: large;
    top: 0;
    position: absolute;
    width: 100%;
    border-radius: 14px 14px 0px 0px;
  }

  .item {
    flex-basis: 350px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
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
    grid-column: span 2 / auto;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 100px;
    border-radius: 10px;
    justify-self: stretch;
  }

  .span-col2 {
    width: 100px;
    font-size: 12px;
    font-weight: 300;
    white-space: nowrap;
    text-align: center;
    padding: 4px 0;
    color: #8a2b06;
    background-color: #fff;
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

const CategoryDetailsCard = ({ clickHandler, mealsCategory }: Props) => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addHandler = (mealCat: MealCategory) => {
    dispatch(
      onAdd({
        name: mealCat.name,
        objectId: mealCat.objectId!,
        amount: 1,
        price: Number((Math.random() * 12.5).toFixed(2)),
      })
    );
  };

  return (
    <Wrapper>
      {mealsCategory &&
        mealsCategory.map((mealCat) => {
          const amount = items.find(
            (x) => x.objectId === mealCat.objectId
          )?.amount;
          return (
            <div key={mealCat.name} className="item">
              {amount && <div className="cartItem">selected {amount} of</div>}
              <img src={mealCat.thumbImg} alt={mealCat.name} />
              <h3 className="header">{mealCat.name}</h3>
              {mealCat.description && (
                <p className="description">
                  {mealCat.description.slice(0, 100)}...
                </p>
              )}
              <Button
                className="span-col2"
                onClick={() => clickHandler(mealCat.name.toLowerCase())}
              >
                More Info
              </Button>
              <Button className="addbtn" onClick={() => addHandler(mealCat)}>
                Add
              </Button>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default CategoryDetailsCard;
