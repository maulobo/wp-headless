"use client";
import React, { useState, useEffect } from "react";

export const AppContext = React.createContext([{}, () => {}]);

export const AppProvider = (props) => {
  const [cart, setCart] = useState(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadCartFromLocalStorage = () => {
      let cartData = localStorage.getItem("next-cart");

      setCart(cartData !== null ? JSON.parse(cartData) : null);
      setLoading(false);
    };

    if (typeof window !== "undefined") {
      loadCartFromLocalStorage();
    }
  }, []);
  useEffect(() => {
    if (!isLoading && typeof window !== "undefined") {
      localStorage.setItem("next-cart", JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {props.children}
    </AppContext.Provider>
  );
};
