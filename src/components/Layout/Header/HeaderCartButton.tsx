import CartIcon from "../../Cart/CartIcon";
import Button from "./HeaderCartButton.styles";

interface Props {
  className?: string;
}
const HeaderCartButton = ({ className }: Props) => {
  return (
    <Button className={className}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </Button>
  );
};

export default HeaderCartButton;
