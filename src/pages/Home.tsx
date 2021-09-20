import React, { useState } from "react";
import Cart from "../components/Cart/Cart";
import Header from "../components/Layout/Header/Header";
import Meals from "../components/Meals/Meals";

const Home = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <>
      {isModalShow && <Cart onClose={() => setIsModalShow(false)} />}
      <Header onShowCart={() => setIsModalShow(true)} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default Home;
