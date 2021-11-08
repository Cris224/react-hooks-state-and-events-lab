import React from "react";
import { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

  function toggleCart(){
    setCart(cart => !cart);
  }

  const inCart = cart ? "in-cart" : "";
  const btnClr = cart ? "remove" : "add";

  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClr} onClick={toggleCart}>{cart ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
