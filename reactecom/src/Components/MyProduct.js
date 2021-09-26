import React from "react";

export const MyProduct = ({ myProduct, addToCart }) => {
  const handleAddtoCart = () => {
    addToCart(myProduct);
  }

  return (
    <div className="product">
      <div className="product-img">
        <img src={myProduct.url} alt="product-img" />
      </div>
      <div className="product-text name">{myProduct.name}</div>
      <div className="product-text description">{myProduct.description}</div>
      <div className="product-text quantity">{myProduct.quantity}</div>
      <div className="product-text price">Rs.{myProduct.price}</div>
      <div className="btn btn-danger btn-md cart-btn" onClick={handleAddtoCart}>
        Add To Cart
      </div>
      <pre> </pre>
    </div>
  );
};
