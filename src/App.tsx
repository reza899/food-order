import { ToastContainer } from "react-toastify";
import { CartContextProvider } from "./store/cart-context";
import "react-toastify/dist/ReactToastify.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import CategoryDetails from "./pages/Category/CategoryDetails";
import CategoryList from "./pages/Category/CategoryList";
import RandomMeal from "./pages/Meal/RandomMeal";
import AllMeals from "./pages/Meal/AllMeals";

function App() {
  return (
    <CartContextProvider>
      <ToastContainer position="bottom-right" />
      <Switch>
        <Route path="/category/:name" component={CategoryDetails} />
        <Route path="/category" component={CategoryList} />
        <Route path="/random" component={RandomMeal} />
        <Route path="/meals" component={AllMeals} />
        <Route path="/error" component={Error} />
        <Route path="/" component={Home} exact />
        <Redirect to="/error" />
      </Switch>
    </CartContextProvider>
  );
}

export default App;
