import React from "react";
import { MyProduct } from "./MyProduct";
export const Products = ({ products,addToCart }) => {
 
  return products.map((myProduct) => (
    <MyProduct key={myProduct.ID} myProduct={myProduct}
    addToCart={addToCart}
    />
  ))
};
