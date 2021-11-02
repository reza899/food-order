import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled("div")`
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    /* background-color: #8a2b06; */
    background: var(--color-linear);

    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 10;
  }

  .links {
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  position: relative;

  img {
    width: 110%;
    height: 100%;
    object-fit: cover;
    /* transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem); */
  }
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--color-1);
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: wheat;
  text-decoration: none;
  margin: 1rem;
  position: relative;

  &.active {
    color: #e2ee83;
  }
`;

export const StyledLink = styled(Link)`
  color: wheat;
  text-decoration: none;
  margin: 1rem;
  position: relative;

  h1 {
    display: inline;
    font-size: 1.5rem;
    margin-left: 1rem;

    @media (max-width: 450px) {
      display: none;
    }
  }
`;

export const StyledSpan = styled("span")`
  color: wheat;
  text-decoration: none;
  margin: 1rem;
  position: relative;

  h1 {
    display: inline;
    font-size: 1.5rem;
    margin-left: 1rem;

    @media (max-width: 450px) {
      display: none;
    }
  }
`;
