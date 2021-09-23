import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #641e03;
    border-color: #641e03;
  }
`;

interface Props {
  children: React.ReactNode;
  [props: string]: any;
}
const Button = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
