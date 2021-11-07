import styled from "styled-components";

export const StyledCart = styled("div")`
  overflow-y: visible;
  display: flex;
  flex-direction: column;
  .cart-items {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;

    h3 {
      text-align: center;
    }
  }

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  .orderbtn {
    margin: 1rem;
  }
`;
