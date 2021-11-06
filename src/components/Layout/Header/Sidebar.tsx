import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import styled from "styled-components";

import { selectIsLoggedin } from "../../../store/store";
import { onLoggedOut } from "../../../store/authSlice";
import { GiHamburgerMenu } from "react-icons/gi";

import { StyledSpan } from "./Header.styles";

const StyleSide = styled.div`
  .links {
    display: none;
    @media (max-width: 930px) {
      /* transition: transform 350ms ease-in-out; */
      display: block;
      position: fixed;
      background-color: var(--color-background1);
      font-size: 3rem;
      color: var(--color-4);
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 100;
      transform: translateX(0%);
      transition: transform 250ms cubic-bezier(0.5, 0, 0.5, 1);
      text-align: center;
    }
  }

  .hmenu {
    display: none;
    transform: translateX(100%);
    @media (max-width: 930px) {
      display: inline;
      padding-left: 1rem;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 20%;
  list-style: none;
  align-items: center;
  text-decoration: none;
  color: var(--color-4);
  text-shadow: 1px 1px 0px var(--color-1);

  &:hover {
    color: var(--color-3);
  }
`;

const Sidebar = () => {
  const [sideState, setSideState] = useState(false);
  const isLogedIn = useSelector(selectIsLoggedin);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch(onLoggedOut());
    history.replace("/");
  };

  if (!sideState) {
    return (
      <StyleSide>
        <div className="hmenu">
          <GiHamburgerMenu
            size="2rem"
            color="wheat"
            onClick={() => setSideState(true)}
          />
        </div>
      </StyleSide>
    );
  }
  return (
    sideState && (
      <StyleSide onClick={() => setSideState(false)}>
        <div className="links">
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/category">Categories</StyledNavLink>
          <StyledNavLink to="/area">Areas</StyledNavLink>
          <StyledNavLink to="/random">Random</StyledNavLink>
          {!isLogedIn ? (
            <StyledNavLink to="/login">Login</StyledNavLink>
          ) : (
            <StyledSpan onClick={logoutHandler}>Logout</StyledSpan>
          )}
        </div>
      </StyleSide>
    )
  );
};

export default Sidebar;
