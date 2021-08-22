import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../store/cart-context";

interface Props {
  className?: string;
  onClose?: () => void;
}

const CheckoutStyled = styled.section`
  &.control {
    text-align: center;
  }
`;

const Checkout = ({ onClose, className }: Props) => {
  const { items, totalAmount } = useCartContext();
  return (
    <>
      <form>
        <div className="control">
          <label htmlFor="name">Name:</label>
          <input autoFocus type="text" name="name" id="name" />
        </div>
        <div className="control">
          <label htmlFor="street">Street:</label>
          <input type="text" name="street" id="street" size={30} />
        </div>
        <div className="control">
          <label htmlFor="postal-code">Postal Code:</label>
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            placeholder="122-445-667"
            size={9}
          />
        </div>
        <div className="control">
          <label htmlFor="city">City:</label>
          <input list="ourCities" name="city" id="city" />
          <datalist id="ourCities">
            <option value="Johannesburg" />
            <option value="Capetown" />
          </datalist>
        </div>
        <div className="control">
          <label htmlFor="timeDevlivered">Time Devlivered:</label>
          <input type="time" name="timeDevlivered" id="timeDevlivered" />
        </div>

        <div className={className}>
          <ul>
            {items.map((item) => {
              return (
                <li>
                  {item.name} : {item.price} &nbsp; - &nbsp; {item.amount!}
                </li>
              );
            })}
          </ul>

          <div className="actions">
            <button className="button--alt" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="button--alt" type="reset">
              Reset
            </button>
            <button className="submit">Confirm</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Checkout;
