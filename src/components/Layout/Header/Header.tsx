import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import HeaderCartButton from "./HeaderCartButton";
import Button from "../../UI/Button";

import { GiHotMeal } from "react-icons/gi";
import {
  StyledDiv,
  StyledHeader,
  StyledLink,
  StyledNavLink,
} from "./Header.styles";

import { selectIsLoggedin } from "../../../store/store";
import { onLoggedOut } from "../../../store/authSlice";

interface Props {
  className?: string;
  onShowCart: () => void;
}

const Header = ({ className, onShowCart }: Props) => {
  const isLogedIn = useSelector(selectIsLoggedin);
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
          <StyledLink to="/">
            <GiHotMeal
              color="wheat"
              size="2rem"
              style={{ verticalAlign: "baseline" }}
            />{" "}
            Food Order
          </StyledLink>
        </h1>

        <>
          <StyledNavLink to="/category">Categories</StyledNavLink>
          <StyledNavLink to="/area">Areas</StyledNavLink>
          <StyledNavLink to="/random">Random</StyledNavLink>
          <HeaderCartButton onClick={onShowCart} />
        </>

        {!isLogedIn ? (
          <Button style={{ backgroundColor: "white" }}>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </Button>
        ) : (
          <Button onClick={logoutHandler}>Logout</Button>
        )}
      </header>
      <StyledDiv>
        <img src="/assets/meals.jpg" alt="a table full of meals" />
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
