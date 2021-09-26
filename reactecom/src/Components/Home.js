import React, { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import { auth, fs } from "../Util/Util";

export const Home = (props) => {
  function GetUserUid() {
    const [uid, setUserUid] = useState(null);
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUserUid(user.uid);
        }
      });
    }, []);
    return uid;
  }

  const uid = GetUserUid();

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

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await fs.collection("Products").get();
    const productsArray = [];
    for (var snap of products.docs) {
      var data = snap.data();
      data.Id = snap.id;
      productsArray.push({
        ...data,
      });
      if (productsArray.length === products.docs.length) {
        setProducts(productsArray);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  var Product;
  const addToCart = (product) => {
    if (uid !== null) {
      Product = product;
      Product["qty"] = 1;
      //Product["quantity"] = Product.quantity - Product.qty;
      Product["TotalPrice"] = Product.qty * Product.price;
      fs.collection("Mycart " + uid)
        .doc(product.ID)
        .set(Product)
        .then(() => {
          console.log(Product.name + "  Succesfully added to the cart");
        });
    } else {
      props.history.push("/login");
    }
  };

  return (
    <React.Fragment>
      <Navbar user={user} />
      <br></br>
      {products.length > 0 && (
        <div className="container">
          <h1 className="text-center">Products</h1>
          <div className="product-box">
            <Products products={products} addToCart={addToCart} />
          </div>
        </div>
      )}
      {products.length < 1 && <div className="container-fluid">Loading...</div>}
    </React.Fragment>
  );
};
