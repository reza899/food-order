import styled from "styled-components";

// export const CheckoutWrapper = styled.div`
//   .checkoutItems {
//     margin: 0;
//     padding: 0;
//     max-height: 20rem;
//     overflow: auto;
//   }
// `;

export const Form = styled.form`
  /* margin: 1rem 0; */
  /* height: 23rem; */
  overflow-y: visible;

  .control {
    margin-bottom: 0.5rem;
  }

  .control label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  .control input {
    width: 100%;
    padding: 6px;
    border: 1px solid gray;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 6px;
    resize: vertical;
  }

  .submit {
    margin: 1rem;
  }

  .invalid label {
    color: #ca3e51;
  }

  .invalid input {
    border-color: #aa0b20;
    background-color: #ffeff1;
  }
`;

export const StyleLiCheckout = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0px 20px;
  border-bottom: 0.1px solid lightgray;

  li {
    list-style: none;
  }

  .title {
    align-self: flex-start;
  }
  .price {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .totalPrice {
    font-weight: bold;
  }
`;
