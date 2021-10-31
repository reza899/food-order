import React, { Suspense, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Loading from "./components/UI/Loading";

import "react-toastify/dist/ReactToastify.css";

const Home = React.lazy(() => import(`./pages/Home`));
const Error = React.lazy(() => import(`./pages/Error`));
const CategoryDetails = React.lazy(
  () => import(`./pages/Category/CategoryDetails`)
);
const CategoryList = React.lazy(() => import(`./pages/Category/CategoryList`));
const RandomMeal = React.lazy(() => import(`./pages/Meals/RandomMeal`));
const MealDetails = React.lazy(() => import(`./pages/Meals/MealDetails`));
const AreaList = React.lazy(() => import(`./pages/Area/AreaList`));
const AreaDetails = React.lazy(() => import(`./pages/Area/AreaDetails`));

function App() {
  const [isModalShow, setIsModalShow] = useState(false);
  return (
    <>
      <ToastContainer position="bottom-right" />
      {isModalShow && <Cart onClose={() => setIsModalShow(false)} />}
      <Header onShowCart={() => setIsModalShow(true)} />

      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/error" component={Error} />
          <Route path="/category/:name" component={CategoryDetails} />
          <Route path="/category" component={CategoryList} />
          <Route path="/meal/:name" component={MealDetails} />
          <Route path="/area/:name" component={AreaDetails} />
          <Route path="/area" component={AreaList} />
          <Route path="/random" component={RandomMeal} />
          {/* <PrivateRoute>
            <Switch></Switch>
          </PrivateRoute> */}
          <Redirect to="/error" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
