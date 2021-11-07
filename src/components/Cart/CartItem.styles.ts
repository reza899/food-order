import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 2px solid color;
  padding: 1rem 0;
  margin: 1rem 0;

  & h4 {
    margin: 0 0 0.5rem 0;
    color: #363636;
    flex-grow: 1;
  }

  img {
    border-radius: 50%50%;
    border: 1px solid var(--color-9);
    margin-right: 1rem;
    flex-basis: 60px;
  }
  .title {
    flex-basis: 200px;
  }

  .price {
    font-weight: bold;
    color: #8a2b06;
    flex-grow: 1;
    font-size: 1.2rem;
    margin: 0px 5px;
  }
  .counter {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .counter button {
    width: 30px;
    height: 30px;
    background-color: var(--color-9);
    border-radius: 50%;
    border: none;
    font-size: 20px;
    color: var(--color-1);
    cursor: pointer;
    margin: 8px;
  }

  .amount {
    color: var(--color-3);
  }

  @media (min-width: 768px) {
    .actions {
      flex-direction: row;
    }
  }

  /* & button {
    font: inherit;
    font-weight: bold;
    font-size: 1.25rem;
    color: #8a2b06;
    border: 1px solid #8a2b06;
    width: 3rem;
    text-align: center;
    border-radius: 6px;
    background-color: transparent;
    cursor: pointer;
    margin-left: 1rem;
    margin: 0.25rem;
  } */

  & button:hover,
  & button:active {
    background-color: var(--color-7);
    color: var(--color-4);
  }
`;
