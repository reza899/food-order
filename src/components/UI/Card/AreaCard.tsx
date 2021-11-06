import styled from "styled-components";

import { Area } from "../../../model/meals";
import Button from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .item {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    margin: 10px 10px;
    padding: 2rem;
    position: relative;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    transition: 350ms opacity ease-in 1ms;
    opacity: 0.8;
    border-radius: 14px;
    background-color: #fff;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      opacity: 1;
      border: 2px solid var(--color-background2);
    }
  }
`;

interface Props {
  areas: Area[];
  clickHandler: (param: string) => void;
}

const AreaCard = ({ clickHandler, areas }: Props) => {
  return (
    <Wrapper>
      {areas &&
        areas.map((area) => {
          return (
            <div key={area.name} className="item">
              <h3 className="header">{area.name}</h3>
              <Button onClick={() => clickHandler(area.name.toLowerCase())}>
                More...
              </Button>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default AreaCard;
