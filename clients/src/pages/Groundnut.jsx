import React from "react";
import "../styles/Cartlist.css";
import CartItem from "./CartItem";
import image from "../assets/images/paste1.jpg";

const Groundnut = () => {
  const groundnut = [
    {
      name: "Groundnut",
      quantity: "5kg",
      description:
        "Groundnut paste processed with love from the Upper East Region",
    },

    {
      name: "Groundnut",
      quantity: "5kg",
      description:
        "Groundnut paste processed with love from the Upper East Region",
    },

    {
      name: "Groundnut",
      quantity: "5kg",
      description:
        "Groundnut paste processed with love from the Upper East Region",
    },

    {
      name: "Groundnut",
      quantity: "5kg",
      description:
        "Groundnut paste processed with love from the Upper East Region",
    },

    {
      name: "Groundnut",
      quantity: "5kg",
      description:
        "Groundnut paste processed with love from the Upper East Region",
    },

    {
      name: "Groundnut",
      quantity: "5kg",
      description:
        "Groundnut paste processed with love from the Upper East Region",
    },
  ];
  return (
    <div className="cartlist">
      {groundnut.map((item) => (
        <CartItem
          src={image}
          quantity={item.quantity}
          description={item.description}
          title={item.name}
        />
      ))}
    </div>
  );
};

export default Groundnut;
