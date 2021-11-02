import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { HiShoppingCart } from "react-icons/hi";

import { selectCartItems, selectCartTotalAmount } from "../../../store/store";

import { Button } from "./HeaderCartButton.styles";

interface Props {
  onClick: () => void;
}
const HeaderCartButton = ({ onClick }: Props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  // const { items, totalAmount } = useCartContext();

  const items = useSelector(selectCartItems);
  const totalAmount = useSelector(selectCartTotalAmount);

  useEffect(() => {
    if (items.length === 0) return;

    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items, totalAmount]);
  return (
    <Button>
      <div
        onClick={onClick}
        className={`button ${btnIsHighlighted ? "bump" : ""}`}
      >
        <HiShoppingCart size="20" />
        {/* <span>Your Cart</span> */}
        <span className="badge">
          {items.reduce((total, cur) => {
            return total + cur.amount!;
          }, 0)}
        </span>
      </div>
    </Button>
  );
};

export default HeaderCartButton;
