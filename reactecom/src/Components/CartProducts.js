import React from "react";
import { MyProduct } from "./MyProduct";

export const CartProducts = ({ cartProducts }) => {
  return cartProducts.map((cartProduct) => (
    <MyProduct key={cartProduct.ID} cartProduct={cartProduct} />
  ));
};
