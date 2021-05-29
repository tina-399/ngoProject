import React from "react";
import "../styles/Footer.css";
import FooterLogo from "../components/FooterLogo";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  return (
    <footer className="footer">
       
          <ul className="footcontact">
          <FooterLogo to="/" />
      <div className="footcontact1">
      <NavItem to="/" name="+233-548449660"/>
      <NavItem to="/" name="ernestinanyaaba399@gmail.com"/>
      </div>
      <div className="footcontact2">
        <NavItem to="/" ><FacebookIcon/></NavItem>
        <NavItem to="/"><InstagramIcon/></NavItem>
        <NavItem to="/" ><TwitterIcon/></NavItem>
      </div>
          </ul>
         <p className="copyright"><CopyrightIcon/>2021 FEEM NGO. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
