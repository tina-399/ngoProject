 
 import "../styles/Cartlist.css";
import CartItem from './CartItem';
import FetchQuery from "../components/UseEffect"
import image from "../assets/images/bag.png"
import { useState,useEffect } from "react";



 
 const Bags = () => {


    const Bags = [
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

      {
        name: "fugu",
        quantity: "4yards",
        description: "Beautifully woven fugu of variety of colours",
      },
    ];

    
     return (
       <div className="cartlist">
         {Bags.map((item) => (
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
 
 export default Bags;
 
