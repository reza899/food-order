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
  StyledSpan,
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
      <nav>
        <StyledLink to="/">
          <GiHotMeal
            color="wheat"
            size="2rem"
            style={{ verticalAlign: "baseline" }}
          />
          <h1>Food Order</h1>
        </StyledLink>

        <div className="links">
          <StyledNavLink to="/category">Categories</StyledNavLink>
          <StyledNavLink to="/area">Areas</StyledNavLink>
          <StyledNavLink to="/random">Random</StyledNavLink>

          {!isLogedIn ? (
            <StyledNavLink to="/login">Login</StyledNavLink>
          ) : (
            <StyledSpan onClick={logoutHandler}>Logout</StyledSpan>
          )}
        </div>
        <HeaderCartButton onClick={onShowCart} />
      </nav>
      <StyledDiv>
        <img src="/assets/meals.png" alt="a table full of meals" />
        {/*  */}
      </StyledDiv>
    </StyledHeader>
  );
};

export default Header;
