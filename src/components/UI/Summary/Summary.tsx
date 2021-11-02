import styled from "styled-components";

export const StyledSection = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  min-height: 200px;
  margin: auto;
  margin-top: -10rem;
  margin-bottom: 2rem;
  position: relative;
  background-color: var(--color-background2);
  color: white;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 2rem;
    margin-top: 0;
  }
`;

const Summary: React.FC = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Summary;
