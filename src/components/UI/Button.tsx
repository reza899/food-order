import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: var(--color-7);
  border: 1px solid var(--color-6);
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 10px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: var(--color-9);
    border-color: var(--color-8);
  }
`;

interface Props {
  [props: string]: any;
}
const Button: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
