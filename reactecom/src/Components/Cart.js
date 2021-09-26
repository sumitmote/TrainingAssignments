import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { auth, fs } from "../Util/Util";
import { CartProducts } from "./CartProducts";

export const Cart = () => {
  function GetCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("users")
            .doc(user.uid)
            .get()
            .then((snapshot) => {
              setUser(snapshot.data().FullName);
            });
        } else {
          setUser(null);
        }
      });
    }, []);
    return user;
  }

  const user = GetCurrentUser();

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Mycart " + user.uid).onSnapshot((snapshot) => {
          const newCartProduct = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          console.log("Is new product object holding ??:"+newCartProduct);
          setCartProducts(newCartProduct);
        });
      } else {
        console.log("user is not logged to website");
      }
    });
  }, []);

  console.log(cartProducts);

  return (
    <React.Fragment>
      <Navbar user={user} />
      <br></br>
      {cartProducts.length > 0 && (
        <div className="container">
          <h1 className="text-center">Cart</h1>
          <div className="products-box">
            <CartProducts cartProducts={cartProducts} />
          </div>
        </div>
      )}
      {cartProducts.length < 1 && (
        <div className="container">
          No Products in Shopping Cart..Go to Shopping.
        </div>
      )}
    </React.Fragment>
  );
};
