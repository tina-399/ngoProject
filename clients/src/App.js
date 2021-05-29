import "./App.css";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Activities from "./pages/Activities";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ShopHome from "./components/ShopHome";
import Button from "./components/Button";
import SignPage from "./pages/SignPage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Butter from "./pages/Butter";
import Fugu from "./pages/Fugu";
import Groundnut from "./pages/Groundnut";
import Bags from "./pages/Bags";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import UserContext from "./context/UserContext";
import { useState } from "react";

function App() {
  const [authedUser, setAuthedUser] = useState(false);
  return (
    <UserContext.Provider value={{ authedUser, setAuthedUser }}>
      <BrowserRouter>
        <Switch>
          <div>
            <Nav />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={About} />
            <Route path="/activities" component={Activities} />
            <Route path="/shop" component={Shop} />
            <Route path="/button" component={Button}>
              {/* <ShopHome /> */}
            </Route>
            <Route path="/butter" component={Butter} />
            <Route path="/fugu" component={Fugu} />
            <Route path="/groundnut" component={Groundnut} />
            <Route path="/bags" component={Bags} />
          </div>
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
