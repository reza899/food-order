import { Link, NavLink } from "react-router-dom";
import { StyledDiv, StyledHeader } from "./Header.styles";
import HeaderCartButton from "./HeaderCartButton";
import { onLoggedOut } from "../../../store/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedin } from "../../../store/store";
import Button from "../../UI/Button";

interface Props {
  className?: string;
  onShowCart: () => void;
}
const Header = ({ className, onShowCart }: Props) => {
  const isLoogedIn = useSelector(selectIsLoggedin);
  const dispatch = useDispatch();

  return (
    <StyledHeader className={className}>
      <header>
        <h1>React Meals </h1>

        {isLoogedIn && (
          <>
            <NavLink to="/category">Categories</NavLink>
            <NavLink to="/area">Areas</NavLink>
            <NavLink to="/random">Random</NavLink>
            <Button onClick={() => dispatch(onLoggedOut())}>Logout</Button>
          </>
        )}
        {!isLoogedIn && (
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        )}
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <StyledDiv>
        <img src="/assets/meals.jpg" alt="a table full of meals" />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
