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
}
const Input = ({ label, input }: Props) => {
  return (
    <StyledInput>
      <label htmlFor={input.id}>{label}</label>
      <input className="input" {...input} />
    </StyledInput>
  );
};

export default Input;
