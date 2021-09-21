import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { CartContextProvider } from "./store/cart-context";
import "react-toastify/dist/ReactToastify.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import CategoryDetails from "./pages/Category/CategoryDetails";
import CategoryList from "./pages/Category/CategoryList";
import RandomMeal from "./pages/Meals/RandomMeal";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import MealDetails from "./pages/Meals/MealDetails";
import AreaList from "./pages/Area/AreaList";

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <CartContextProvider>
      <ToastContainer position="bottom-right" />
      {isModalShow && <Cart onClose={() => setIsModalShow(false)} />}
      <Header onShowCart={() => setIsModalShow(true)} />

      <Switch>
        <Route path="/category/:name" component={CategoryDetails} />
        <Route path="/category" component={CategoryList} />
        <Route path="/meal/:name" component={MealDetails} />
        <Route path="/area" component={AreaList} />
        <Route path="/random" component={RandomMeal} />
        <Route path="/error" component={Error} />
        <Route path="/" component={Home} exact />
        <Redirect to="/error" />
      </Switch>
    </CartContextProvider>
  );
}

export default App;
