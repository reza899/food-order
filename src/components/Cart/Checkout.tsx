import React, { FormEvent } from "react";
import { useRef } from "react";
import styled from "styled-components";
import { useCartContext } from "../../store/cart-context";
import { Form } from "./Checkout.styles";

interface Props {
  className?: string;
  onClose?: () => void;
}

const Checkout = ({ onClose, className }: Props) => {
  const { items } = useCartContext();

  const nameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const postalCodeRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);

  const confirmHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredName = nameRef.current?.value;
    const enteredStreet = streetRef.current?.value;
    const enteredPostalCode = postalCodeRef.current?.value;
    const enteredCity = cityRef.current?.value;

    
  };

  return (
    <div>
      <Form onSubmit={confirmHandler} className={className}>
        <div className="control">
          <label htmlFor="name">Name:</label>
          <input autoFocus type="text" name="name" id="name" ref={nameRef} />
        </div>
        <div className="control">
          <label htmlFor="street">Street:</label>
          <input type="text" name="street" id="street" ref={streetRef} />
        </div>
        <div className="control">
          <label htmlFor="postal-code">Postal Code:</label>
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            placeholder="122-445-667"
            size={9}
            ref={postalCodeRef}
          />
        </div>
        <div className="control">
          <label htmlFor="city">City:</label>
          <input list="ourCities" name="city" id="city" ref={cityRef} />
          <datalist id="ourCities">
            <option value="Johannesburg" />
            <option value="Capetown" />
          </datalist>
        </div>

        <div className={className}>
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
      </Form>
    </div>
  );
};

export default Checkout;

const CheckoutStyled = styled(Checkout)`
  &.control {
    text-align: center;
  }
`;
