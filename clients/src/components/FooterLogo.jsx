import React from 'react'
import "../styles/FooterLogo.css";
import logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom';
const FooterLogo = ({to}) => {
    return (
        <NavLink to={to} className="footerlogo">
            <img src={logo} alt="logo"/>
        </NavLink>
    )
}

export default FooterLogo;
