import React from 'react'
import styled from 'styled-components';
import { Area } from '../../../model/meals';
import Button from '../Button';


const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: darkgray;
  padding: 2px 16px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 10px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 30%;

    &:hover {
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
                See More...
              </Button>
            </div>
          );
        })}
    </Wrapper>
  );
};

export default AreaCard
