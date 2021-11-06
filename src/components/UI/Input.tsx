import React from "react";
// import { useImperativeHandle } from "react";
// import { useRef } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: lighter;
    font-size: 0.7rem;
    margin-right: 1rem;
  }

  & input {
    outline: none;
    padding: 8px 2px;
    border-radius: 10px;
    color: black;
    margin: 0;
    text-align: center;
  }
`;

interface Props {
  label: string;
  input: React.InputHTMLAttributes<HTMLInputElement>;
  type?: string;
}
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, input, type = "text" }, ref) => {
    // const inputRef = useRef<HTMLInputElement>(null);

    // const getValue = () => {
    //   return inputRef.current?.value;
    // };

    // useImperativeHandle(ref, () => {
    //   return { valued: getValue };
    // });
    return (
      <StyledInput>
        <label htmlFor={input.id}>{label}:</label>
        <input
          className="input"
          {...input}
          ref={ref}
          name={label.toLowerCase()}
          id={label.toLowerCase()}
        />
      </StyledInput>
    );
  }
);

export default Input;
