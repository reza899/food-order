import React from "react";
// import { useImperativeHandle } from "react";
// import { useRef } from "react";
import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-right: 1rem;
  }

  & input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
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
