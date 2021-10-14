import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;

  h1 {
    text-align: center;
  }
`;

const Card: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
