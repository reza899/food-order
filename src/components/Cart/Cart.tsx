import { Meal } from "../../model/meals";
import Checkout from "./Checkout";
import Modal from "../UI/Modal";
import { StyledCart } from "./Cart.styles";
import CartItem from "./CartItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartTotalAmount, selectCartItems } from "../../store/store";
import { onRemove, clear, onAdd } from "../../store/cartSlice";

interface Props {
  className?: string;
  onClose: () => void;
}

export type SubmittingType = {
  submitting: boolean;
  didSubmit: boolean;
};

const Cart = ({ className, onClose }: Props) => {
  // const { items, totalAmount, addItem, removeItem, clearCart } =
  //   useCartContext();
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectCartTotalAmount);
  const items = useSelector(selectCartItems);
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

  const orderConfirmHandler = (val: SubmittingType) => {
    console.log(val);
    val.submitting
      ? setSubmittingStatus({ ...submittingStatus, submitting: true })
      : setSubmittingStatus({ didSubmit: true, submitting: false });
    dispatch(clear());
  };
  const orderingModalContent = (
    <>
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
      {isOrdered && (
        <Checkout onClose={onClose} onConfirm={orderConfirmHandler} />
      )}
      {!isOrdered && (
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Cancel
          </button>
          {items.length > 0 && (
            <button className="button" onClick={() => setIsOrdered(true)}>
              Order
            </button>
          )}
        </div>
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
