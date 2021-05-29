import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logo.png"
import "../styles/Logo.css";

const Logo = ({to}) => {
    return (
        <NavLink to={to} className="logo">
            <img src={logo} alt="logo"/>
        </NavLink>
    )
}

export default Logo;
