import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 45rem;
  width: 90%;
  min-height: 200px;
  margin: auto;
  margin-top: -10rem;
  margin-bottom: 2rem;
  position: relative;
  background-color: var(--color-background2);
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  input {
    width: 10rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }

  a {
    color: white;
  }
`;
