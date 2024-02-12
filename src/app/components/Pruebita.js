"use client";
import React, { useContext } from "react";
import { AppContext } from "./context";

const Pruebita = () => {
  const [cart, setCart] = useContext(AppContext);
  console.log(cart);
  return <div>Pruebita</div>;
};

export default Pruebita;
