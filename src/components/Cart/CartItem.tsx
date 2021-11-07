import { Meal } from "../../model/meals";
import { StyledLi } from "./CartItem.styles";

interface Props {
  item: Meal;
  onAdd: () => void;
  onRemove: () => void;
}
const CartItem = ({
  item: { price, name, amount, thumbImg },
  onAdd,
  onRemove,
}: Props) => {
  return (
    <StyledLi>
      <img src={thumbImg} height={60} alt={name} />
      <h4 className="title">{name}</h4>

      <span className="price">${price}</span>

      <div className="counter">
        <button onClick={onRemove}>-</button>
        <span className="amount">{amount}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </StyledLi>
  );
};

export default CartItem;
