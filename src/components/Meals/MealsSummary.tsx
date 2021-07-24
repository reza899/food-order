import styled from "styled-components";

const Summary = styled.section`
  text-align: center;
  max-width: 45rem;
  width: 90%;
  margin: auto;
  margin-top: -10rem;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 1rem;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);

  h1 {
    font-size: 2rem;
    margin-top: 0;
  }
`;

const MealsSummary = () => {
  return (
    <Summary>
      <h1>Delicious Food, Delivered to you!</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quibusdam
        alias expedita, incidunt adipisci modi doloribus cum laboriosam ipsum!
        Odio sint dignissimos saepe ab
      </p>
      <p>
        {" "}
        dolore vel quos veritatis atque hic laboriosam doloremque sunt ipsam ut
        delectus exercitationem officia nobis! Dolore!
      </p>
    </Summary>
  );
};

export default MealsSummary;
