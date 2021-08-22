import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import { CartContextProvider } from "./store/cart-context";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <CartContextProvider>
      <ToastContainer />
      {isModalShow && <Cart onClose={() => setIsModalShow(false)} />}
      <Header onShowCart={() => setIsModalShow(true)} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
