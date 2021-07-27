import { Meal } from "../../model/meals";
import { useCartContext } from "../../store/cart-context";
import Modal from "../UI/Modal";
import { StyledCart } from "./Cart.styles";
import CartItem from "./CartItem";

interface Props {
  className?: string;
  onClose: () => void;
}

const Cart = ({ className, onClose }: Props) => {
  const { items, totalAmount, addItem, removeItem } = useCartContext();

  const cartItemRemoveHandler = (id: string) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item: Meal) => {
    addItem({ ...item, amount: 1 });
  };
  return (
    <Modal onClick={onClose}>
      <StyledCart className={className}>
        <ul className="cart-items">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
        <div className="total">
          <span>Total Amount</span>
          <span>{`$${totalAmount.toFixed(2)}`}</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Cancel
          </button>
          {items.length > 0 && <button className="button">Submit</button>}
        </div>
      </StyledCart>
    </Modal>
  );
};

export default Cart;
