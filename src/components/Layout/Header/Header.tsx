import { Link, NavLink, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(onLoggedOut());
    history.replace("/");
  };

  return (
    <StyledHeader className={className}>
      <header>
        <h1>
          <Link to="/">Food Order</Link>
        </h1>

        {isLoogedIn && (
          <>
            <NavLink to="/category">Categories</NavLink>
            <NavLink to="/area">Areas</NavLink>
            <NavLink to="/random">Random</NavLink>
            <Button onClick={logoutHandler}>Logout</Button>
            <HeaderCartButton onClick={onShowCart} />
          </>
        )}
        {!isLoogedIn && (
          <Button style={{ backgroundColor: "white" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Button>
        )}
      </header>
      <StyledDiv>
        <img src="/assets/meals.jpg" alt="a table full of meals" />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
