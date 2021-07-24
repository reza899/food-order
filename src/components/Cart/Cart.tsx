import { MealOrder } from "../../model/mealOrder";
import Modal from "../UI/Modal";
import { StyledCart } from "./Cart.styles";

interface Props {
  className?: string;
  onClose: () => void;
}

const Cart = ({ className, onClose }: Props) => {
  const cartItems: MealOrder[] = [
    {
      meal: {
        id: "c1",
        name: "Sushi",
        price: 12.99,
      },
      amount: 2,
    },
  ];
  return (
    <Modal onClick={onClose}>
      <StyledCart className={className}>
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.meal.id}>{item.meal.name}</li>
          ))}
        </ul>
        <div className="total">
          <span>Total Amount</span>
          <span>35.55</span>
        </div>
        <div className="actions">
          <button className="button--alt" onClick={onClose}>
            Cancel
          </button>
          <button className="button">Submit</button>
        </div>
      </StyledCart>
    </Modal>
  );
};

export default Cart;
