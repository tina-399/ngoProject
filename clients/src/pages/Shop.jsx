import React, { useContext } from "react";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Fugu from "./Fugu";
import Butter from "./Butter";
import Groundnut from "./Groundnut";

import "../styles/Shop.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SideNav from "../components/SideNav";
import Bags from "./Bags";

const Shop = () => {
 
  return (
    <section className="shop">
      <BrowserRouter>
        <SideNav />
        <div>
          <h1 className="h1">
            Welcome to our world. Buy quality products made with love
          </h1>

          <Switch>
            <Route path="/bags" component={Bags} />
            <Route path="/fugu" component={Fugu} />
            <Route path="/shop" component={Butter} />
            <Route path="/groundnut" component={Groundnut} />
          </Switch>
        </div>
      </BrowserRouter>
    </section>
  );
};

export default Shop;
