import { StyledDiv } from "./Header.styles";
import HeaderCartButton from "./HeaderCartButton";

interface Props {
  className?: string;
}
const Header = ({ className }: Props) => {
  return (
    <div className={className}>
      <header>
        <h1>React Meals </h1>
        <HeaderCartButton />
      </header>
      <StyledDiv>
        <img src="/assets/meals.jpg" alt="a table full of meals" />
      </StyledDiv>
    </div>
  );
};

export default Header;
