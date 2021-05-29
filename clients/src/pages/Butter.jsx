import React from 'react';
import "../styles/Cartlist.css";
import CartItem from './CartItem';
import image from "../assets/images/SheaImages1.jpg"

const Butter = () => {
    const butter = [
      {
        name: "sheabutter",
        quantity: "5kg",
        description:
          "This is shabutter processed with love from the Upper East Region",
      },

      {
        name: "sheabutter",
        quantity: "5kg",
        description:
          "This is shabutter processed with love from the Upper East Region",
      },

      {
        name: "sheabutter",
        quantity: "5kg",
        description:
          "This is shabutter processed with love from the Upper East Region",
      },

      {
        name: "sheabutter",
        quantity: "5kg",
        description:
          "This is shabutter processed with love from the Upper East Region",
      },

      {
        name: "sheabutter",
        quantity: "5kg",
        description:
          "This is shabutter processed with love from the Upper East Region",
      },

      {
        name: "sheabutter",
        quantity: "5kg",
        description:
          "This is shabutter processed with love from the Upper East Region",
      },
    ];
    return (
      <div className="cartlist">
        {butter.map((item) => (
          <CartItem
            src={image}
            quantity={item.quantity}
            description={item.description}
            title={item.name}
          />
        ))};
      </div>
    );
}

export default Butter;
