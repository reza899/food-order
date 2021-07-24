import CartIcon from "../../Cart/CartIcon";
import Button from "./HeaderCartButton.styles";

interface Props {
  className?: string;
  onClick: () => void;
}
const HeaderCartButton = ({ className, onClick }: Props) => {
  return (
    <Button className={className} onClick={onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">3</span>
    </Button>
  );
};

export default HeaderCartButton;
