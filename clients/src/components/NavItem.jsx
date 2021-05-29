import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navitem.css";

const NavItem = ({ name, to, children,activeClassName,onClick }) => {
  console.log(name);
  return (
    <li className="navitem">
      <NavLink to={to} activeClassName={activeClassName} onClick={onClick}>
        {name}
      </NavLink>
      {children}
    </li>
  );
};

export default NavItem;
