import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Checkout from "./Checkout";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

import { StyledCart } from "./Cart.styles";

import { Meal } from "../../model/meals";
import {
  selectCartTotalAmount,
  selectCartItems,
  selectIsLoggedin,
} from "../../store/store";
import { onRemove, clear, onAdd } from "../../store/cartSlice";
import { CartSubmitting } from "../../hooks/useCartForm";
import Button from "../UI/Button";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  className?: string;
  onClose: () => void;
}

const Cart = ({ className, onClose }: Props) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectCartTotalAmount);
  const items = useSelector(selectCartItems);
  const isLoggedIn = useSelector(selectIsLoggedin);
  const [isOrdered, setIsOrdered] = useState(false);
  const [submittingStatus, setSubmittingStatus] = useState({
    submitting: false,
    didSubmit: false,
  });

  const cartItemRemoveHandler = (id: string) => {
    dispatch(onRemove(id));
  };

  const cartItemAddHandler = (item: Meal) => {
    dispatch(onAdd({ ...item, amount: 1 }));
  };

  const orderConfirmHandler = (val: CartSubmitting) => {
    console.log(val);
    val.submitting
      ? setSubmittingStatus({ ...submittingStatus, submitting: true })
      : setSubmittingStatus({ didSubmit: true, submitting: false });
    dispatch(clear());
  };
  const orderingModalContent = (
    <>
      {!isOrdered ? (
        <>
          <h3 style={{ textAlign: "center" }}>
            <IoCartOutline size="20" color="black" /> Checkout
          </h3>
          <ul className="cart-items">
            {items.map((item) => (
              <CartItem
                key={item.objectId}
                item={item}
                onRemove={cartItemRemoveHandler.bind(null, item.objectId)}
                onAdd={cartItemAddHandler.bind(null, item)}
              />
            ))}
          </ul>
          <div className="total">
            <span>Total Amount</span>
            <span>{`$${totalAmount.toFixed(2)}`}</span>
          </div>
          {!isOrdered && isLoggedIn ? (
            <div className="actions">
              <Button
                style={{ backgroundColor: "white", color: "black" }}
                onClick={onClose}
              >
                Cancel
              </Button>
              {items.length > 0 && (
                <Button className="orderbtn" onClick={() => setIsOrdered(true)}>
                  Order
                </Button>
              )}
            </div>
          ) : (
            <h3>
              First, Please
              <Link to="/login" onClick={onClose}>
                Login
              </Link>
            </h3>
          )}
        </>
      ) : (
        <Checkout
          className="cart-items"
          onClose={onClose}
          onConfirm={orderConfirmHandler}
        />
      )}
    </>
  );
  const submittingModalContent = <p>Sending your order data...</p>;
  const didSubmitModalContent = (
    <>
      <h1 style={{ color: "green" }}>Successfully submit your order!</h1>
      <div className="actions">
        <button className="button--alt" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClick={onClose}>
      <StyledCart className={className}>
        {!submittingStatus.submitting &&
          !submittingStatus.didSubmit &&
          orderingModalContent}
        {submittingStatus.submitting && submittingModalContent}
        {!submittingStatus.submitting &&
          submittingStatus.didSubmit &&
          didSubmitModalContent}
      </StyledCart>
    </Modal>
  );
};

export default Cart;
