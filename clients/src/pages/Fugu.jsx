import React from 'react';
import "../styles/Cartlist.css";
import CartItem from './CartItem';
import image from "../assets/images/img1.jpg";

const Fugu = () => {
    const Fugu = [
      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
        image: ""
      },

      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
      },

      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
      },

      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
      },

      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
      },

      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
      },
    ];

    return (
      <div className="cartlist">
        {Fugu.map((item) => (
          <CartItem
            src={image}
            quantity={item.quantity}
            description={item.description}
            title={item.name}
          />
        ))}
      </div>
    );
}

export default Fugu;
