import React, { useContext } from "react";
import NavItem from "./NavItem";
import "../styles/Nav.css";
import Logo from "./Logo";
import { useHistory } from "react-router-dom";
import UserContext from "../context/UserContext";

const Nav = () => {
  const { authedUser, setAuthedUser } = useContext(UserContext);
  const history = useHistory();
  const handleSignOut = () => {
    setAuthedUser(false);
    history.push("/");
  };

  return (
    <nav className="nav">
      <ul>
        <Logo to="/" />

        <NavItem to="/about" name="About Us" activeClassName="selected" />
        <NavItem
          to="/activities"
          name="Activities"
          activeClassName="selected"
        />
        <NavItem to="/shop" name="Shop" activeClassName="selected" />
        <NavItem
          to={`${authedUser ? "" : "/signup"}`}
          name={`${authedUser ? "Welcome" : "Sign Up"}`}
          activeClassName={`${authedUser ? "" : "selected"}`}
        />
        <NavItem
          to={`${authedUser ? "" : "/signin"}`}
          name={`${authedUser ? "Sign Out" : "Sign In"}`}
          activeClassName={`${authedUser ? "" : "selected"}`}
          onClick={handleSignOut}
        />
      </ul>

      <NavItem to="/donate" name="Donate" activeClassName="selected" />
    </nav>
  );
};

export default Nav;
