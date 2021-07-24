import { StyledDiv, StyledHeader } from "./Header.styles";
import HeaderCartButton from "./HeaderCartButton";

interface Props {
  className?: string;
  onShowCart: () => void;
}
const Header = ({ className, onShowCart }: Props) => {
  return (
    <StyledHeader className={className}>
      <header>
        <h1>React Meals </h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <StyledDiv>
        <img src="/assets/meals.jpg" alt="a table full of meals" />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
