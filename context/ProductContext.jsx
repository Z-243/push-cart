"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export default function ProductProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState({});

  function handleIncrementProduct(product_id, num, data, noIncrement = false) {
    const newCart = {
      ...cart,
    };
    if (product_id in cart) {
      // if product already in cart, add/subtracct the value
      newCart[product_id] = {
        ...data,
        quantity: noIncrement ? num : newCart[product_id]?.quantity + num,
      };
    } else {
      // if product not already in cart, add it
      newCart[product_id] = {
        ...data,
        quantity: num,
      };
    }

    if (parseInt(newCart[product_id].quantity) <= 0) {
      // remove product if value is 0 or negative
      delete newCart[product_id];
    }
    // overwrite the cart state with the new changes
    setCart(newCart);
  }

  const value = {
    cart,
    handleIncrementProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export const useProducts = () => useContext(ProductContext);
