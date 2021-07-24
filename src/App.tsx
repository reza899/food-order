import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <div className="App">
      {isModalShow && <Cart onClose={() => setIsModalShow(false)} />}
      <Header onShowCart={() => setIsModalShow(true)} />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
