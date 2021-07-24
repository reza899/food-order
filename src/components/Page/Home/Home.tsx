import React from "react";

interface Props {
  className?: string;
}





const Home = ({ className }: Props) => {
  return (
    <div className={className}>
      <h1>Delicious Food, Delivered to you!</h1>
      <h3>Lorem ipsum dolor sit amet.</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quibusdam
        alias expedita, incidunt adipisci modi doloribus cum laboriosam ipsum!
        Odio sint dignissimos saepe ab, dolore vel quos veritatis atque hic
        laboriosam doloremque sunt ipsam ut delectus exercitationem officia
        nobis! Dolore!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sit ut
        dicta similique, voluptatem veritatis ratione, quia necessitatibus
        architecto deleniti tempore ex molestiae itaque accusamus, asperiores
        natus. A, fugit enim!
      </p>
    </div>
  );
};

export default Home;
