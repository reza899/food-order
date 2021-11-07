import { useSelector } from "react-redux";
import useCartForm from "../../hooks/useCartForm";
import { CartSubmitting } from "../../hooks/useCartForm";
import { selectCartItems, selectCartTotalAmount } from "../../store/store";
import Button from "../UI/Button";

import { IoBagCheckOutline } from "react-icons/io5";
import { Form, StyleLiCheckout } from "./Checkout.styles";

interface Props {
  className?: string;
  onClose?: () => void;
  onConfirm: (val: CartSubmitting) => void;
}

const Checkout = ({ onClose, className, onConfirm }: Props) => {
  const items = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  const {
    state: values,
    error,
    submitHandler,
    changeInputHandler: onChange,
  } = useCartForm(
    {
      name: "",
      street: "",
      postalcode: "",
    },
    onConfirm
  );

  return (
    <div>
      <div className={className}>
        <h3>
          <IoBagCheckOutline size="20" color="black" /> Checkout
        </h3>
        {items.map(({ name, price, amount }, i) => {
          return (
            <StyleLiCheckout key={i}>
              <span className="title">
                {i + 1} - {name}
              </span>
              <div className="price">
                <span className="">${price}</span>
                <span className="">{amount}</span>
                <span className="totalPrice">${price! * amount!}</span>
              </div>
            </StyleLiCheckout>
          );
        })}
      </div>
      <div className="total">
        <span>Total Amount</span>
        <span>{`$${totalAmount.toFixed(2)}`}</span>
      </div>
      <Form onSubmit={submitHandler} className={className}>
        <div className="control">
          <label htmlFor="name">Name:</label>
          <input
            autoFocus
            type="text"
            name="name"
            id="name"
            value={values?.name}
            onChange={onChange}
          />
          {error.name}
        </div>
        <div className="control">
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            name="street"
            id="street"
            value={values?.street}
            onChange={onChange}
          />
          {error.street}
        </div>
        <div className="control">
          <label htmlFor="postalcode">Postal Code:</label>
          <input
            type="text"
            name="postalcode"
            id="postalcode"
            placeholder="122-445-667"
            onChange={onChange}
            value={values?.postalcode}
          />
          {error.postalcode}
        </div>

        <div className={className}>
          <div>
            <Button
              type="button"
              onClick={onClose}
              style={{ backgroundColor: "white", color: "black" }}
            >
              Cancel
            </Button>
            <Button className="submit">Confirm</Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Checkout;
