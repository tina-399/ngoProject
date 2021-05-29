import React from "react";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../styles/Cart.css";

const CartItem = (props) => {
  const history = useHistory();
  const { authedUser, setAuthedUser } = useContext(UserContext);
  const [productLink, setProductLink] = useState("");

  const handleClick = () => {
    if (!authedUser) {
      alert("Please Sign Up or Sign In to Buy");
    }
  };

  return (
    <div className="cartitem" onClick={handleClick}>
      <img src={props.src} alt="" />
      <h2>{props.title}</h2>
      <p>{props.quantity}</p>
      <p>{props.description}</p>
      <div className="btn">
        <button>Buy</button>
        <button> Add to Wishlist</button>
      </div>
    </div>
  );
};

export default CartItem;
